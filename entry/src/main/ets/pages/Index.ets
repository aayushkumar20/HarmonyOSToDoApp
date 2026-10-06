import { TaskDataModel } from '../models/TaskDataModel';
import { SciFiTheme } from '../theme/SciFiTheme';

@Entry
@Component
struct Index {
  @StorageLink('app_theme') appThemeStr: string = 'scifi';
  @State tasks: TaskDataModel[] = [];
  @State selectedDate: Date = new Date();
  
  get isKawaii(): boolean {
    return this.appThemeStr === 'kawaii';
  }

  get daysInWeek(): Date[] {
    let days: Date[] = [];
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 14; i++) {
      let d = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      days.push(d);
    }
    return days;
  }

  get filteredTasks(): TaskDataModel[] {
    return this.tasks.filter(t => {
      let tD = new Date(t.dueDate);
      return tD.getFullYear() === this.selectedDate.getFullYear() &&
             tD.getMonth() === this.selectedDate.getMonth() &&
             tD.getDate() === this.selectedDate.getDate();
    });
  }

  build() {
    Stack() {
      // Background
      Rect()
        .width('100%').height('100%')
        .fill(this.isKawaii ? SciFiTheme.kawaiiBg : SciFiTheme.bgDeepSpace)
      
      // Floating Overlay
      if (this.isKawaii) {
        FloatingAnimalsOverlay()
      } else {
        FloatingBotsOverlay()
      }

      Column({ space: 20 }) {
        // Header Bar
        Row() {
          Column() {
            Text(this.isKawaii ? "Magic Checklist 🎀" : "SYS.TODOS: ONNX")
              .fontSize(24)
              .fontWeight(FontWeight.Bold)
              .fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta)
            Text(this.isKawaii ? "Cute Magical Scanner 🐰✨" : "DATA_STREAM_ACTIVE")
              .fontSize(14)
              .fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan)
          }
          .alignItems(HorizontalAlign.Start)

          Blank()

          Row({ space: 12 }) {
            // Theme Switcher Toggle
            Button({ type: ButtonType.Circle }) {
              Text(this.isKawaii ? "✨" : "⬡")
                .fontSize(20)
                .fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan)
            }
            .backgroundColor(SciFiTheme.panelBackground)
            .width(40).height(40)
            .onClick(() => {
              this.appThemeStr = this.isKawaii ? 'scifi' : 'kawaii';
            })

            // Add Button
            Button({ type: ButtonType.Circle }) {
              Text("+")
                .fontSize(24)
                .fontWeight(FontWeight.Bold)
                .fontColor(this.isKawaii ? Color.White : SciFiTheme.neonCyan)
            }
            .backgroundColor(this.isKawaii ? SciFiTheme.neonCyan : '#2600FFFF')
            .width(40).height(40)
            .onClick(() => {
              let newTask = new TaskDataModel("New Manual Task", "MANUAL_INJECT", false, this.selectedDate);
              this.tasks.push(newTask);
            })

            // Scanner Button
            Button({ type: ButtonType.Circle }) {
              Text("📷")
                .fontSize(20)
            }
            .backgroundColor(this.isKawaii ? SciFiTheme.neonMagenta : '#26FF00FF')
            .width(40).height(40)
            .border({ width: this.isKawaii ? 0 : 1.5, color: SciFiTheme.neonMagenta })
            .onClick(() => {
              let newTask = new TaskDataModel("Scanned Bill", "EXTRACT_SUCCESS", true, this.selectedDate);
              this.tasks.push(newTask);
            })
          }
        }
        .width('100%')
        .padding({ left: 20, right: 20, top: 40 })

        // Dashboard Charts
        CuteDashboardChart({ tasks: this.tasks })

        // Apple Calendar Scroll View
        Scroll() {
          Row({ space: 15 }) {
            ForEach(this.daysInWeek, (day: Date) => {
              Column() {
                Text(day.toString().substring(0,3))
                  .fontSize(12)
                  .fontWeight(FontWeight.Bold)
                  .fontColor(this.isSameDay(day, this.selectedDate) ? SciFiTheme.textMain : SciFiTheme.textSecondary)
                Text(day.getDate().toString())
                  .fontSize(18)
                  .fontWeight(FontWeight.Bolder)
                  .fontColor(this.isSameDay(day, this.selectedDate) ? SciFiTheme.textMain : SciFiTheme.textMain)
              }
              .padding({ top: 12, bottom: 12, left: 16, right: 16 })
              .backgroundColor(this.isSameDay(day, this.selectedDate) ? SciFiTheme.neonMagenta : '#990B132B')
              .borderRadius(20)
              .onClick(() => {
                this.selectedDate = day;
              })
            })
          }
          .padding({ left: 20, right: 20 })
        }
        .scrollable(ScrollDirection.Horizontal)
        .scrollBar(BarState.Off)

        // Filtered Task UI
        if (this.filteredTasks.length === 0) {
          Column() {
            Text(this.isKawaii ? "No Magical Tasks Today! 🐹✨" : "AWAITING_NEURAL_LINK...")
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
              .fontColor(SciFiTheme.textSecondary)
          }
          .justifyContent(FlexAlign.Center)
          .layoutWeight(1)
        } else {
          List({ space: 10 }) {
            ForEach(this.filteredTasks, (task: TaskDataModel) => {
              ListItem() {
                TaskRowView({ task: task })
              }
            })
          }
          .padding({ left: 20, right: 20 })
          .layoutWeight(1)
        }
      }
    }
  }

  isSameDay(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  }
}

@Component
struct CuteDashboardChart {
  @StorageLink('app_theme') appThemeStr: string = 'scifi';
  @Prop tasks: TaskDataModel[];
  
  get isKawaii(): boolean { return this.appThemeStr === 'kawaii'; }
  get completedCount(): number { return this.tasks.filter(t => t.completed).length; }
  get pendingCount(): number { return this.tasks.filter(t => !t.completed).length; }

  build() {
    Column() {
      Text(this.isKawaii ? "Magical Progress 🌸" : "SYSTEM_DIAGNOSTICS")
        .fontSize(14)
        .fontColor(SciFiTheme.neonMagenta)
        .margin({ bottom: 10 })
      
      Row() {
        Column() {
          Text(this.isKawaii ? "Finished! ✨" : "DATA_RESOLVED")
            .fontSize(12)
            .fontColor(SciFiTheme.textSecondary)
          Rect().width(Math.max(10, this.completedCount * 30) + 'px').height(20).fill(SciFiTheme.neonGreen).borderRadius(5)
        }.alignItems(HorizontalAlign.Start)
        
        Blank()
        
        Column() {
          Text(this.isKawaii ? "To Do 🐰" : "PENDING_OPS")
            .fontSize(12)
            .fontColor(SciFiTheme.textSecondary)
          Rect().width(Math.max(10, this.pendingCount * 30) + 'px').height(20).fill(SciFiTheme.neonCyan).borderRadius(5)
        }.alignItems(HorizontalAlign.End)
      }
      .width('100%')
    }
    .padding(15)
    .backgroundColor(SciFiTheme.panelBackground)
    .borderRadius(15)
    .margin({ left: 20, right: 20 })
  }
}

@Component
struct TaskRowView {
  @StorageLink('app_theme') appThemeStr: string = 'scifi';
  @ObjectLink task: TaskDataModel;
  
  get isKawaii(): boolean { return this.appThemeStr === 'kawaii'; }

  build() {
    Row() {
      Column({ space: 6 }) {
        Row() {
          if (this.task.isMLGenerated) {
            Text(this.isKawaii ? "🪄 " : "⚡ ")
              .fontColor(SciFiTheme.neonMagenta)
          }
          Text(this.task.title)
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .fontColor(this.task.completed ? SciFiTheme.textSecondary : SciFiTheme.textMain)
            .decoration({ type: this.task.completed ? TextDecorationType.LineThrough : TextDecorationType.None })
        }
        
        if (this.task.details) {
          Text(this.task.details)
            .fontSize(10)
            .fontColor(SciFiTheme.neonCyan)
        }
        
        Row() {
          Text("🕒 ")
            .fontColor(SciFiTheme.neonMagenta)
          Text(this.task.dueDate.toLocaleTimeString())
            .fontSize(10)
            .fontWeight(FontWeight.Bold)
            .fontColor(SciFiTheme.textSecondary)
        }
      }
      .alignItems(HorizontalAlign.Start)
      
      Blank()
      
      Button({ type: ButtonType.Circle }) {
        Text(this.task.completed ? (this.isKawaii ? "✓" : "⬢") : (this.isKawaii ? "○" : "⬡"))
          .fontSize(24)
          .fontColor(this.task.completed ? SciFiTheme.neonGreen : SciFiTheme.neonCyan)
      }
      .backgroundColor(Color.Transparent)
      .onClick(() => {
        this.task.completed = !this.task.completed;
      })
    }
    .padding(15)
    .backgroundColor(SciFiTheme.panelBackground)
    .borderRadius(15)
    .width('100%')
  }
}

@Component
struct FloatingAnimalsOverlay {
  @State yOffset: number = 0;
  
  aboutToAppear() {
    setInterval(() => {
      this.yOffset = this.yOffset === 0 ? -20 : 0;
    }, 2000);
  }

  build() {
    Stack() {
      Text("🦄").fontSize(60).position({ x: '20%', y: '20%' }).opacity(0.3).translate({ y: this.yOffset })
      Text("🐼").fontSize(50).position({ x: '70%', y: '40%' }).opacity(0.3).translate({ y: -this.yOffset })
      Text("🎀").fontSize(70).position({ x: '40%', y: '70%' }).opacity(0.2).translate({ y: this.yOffset })
    }.width('100%').height('100%').animation({ duration: 2000 })
  }
}

@Component
struct FloatingBotsOverlay {
  @State yOffset: number = 0;
  @State scanlineY: number = -200;

  aboutToAppear() {
    setInterval(() => {
      this.yOffset = this.yOffset === 0 ? -20 : 0;
    }, 2000);
    setInterval(() => {
      this.scanlineY = this.scanlineY > 800 ? -200 : this.scanlineY + 5;
    }, 50);
  }

  build() {
    Stack() {
      Text("👾").fontSize(60).position({ x: '10%', y: '15%' }).opacity(0.3).translate({ y: this.yOffset })
      Text("🤖").fontSize(50).position({ x: '80%', y: '30%' }).opacity(0.3).translate({ y: -this.yOffset })
      Text("🛸").fontSize(70).position({ x: '50%', y: '80%' }).opacity(0.2).translate({ y: this.yOffset })
      
      Rect()
        .width('100%')
        .height(60)
        .fill(SciFiTheme.neonCyan)
        .opacity(0.2)
        .position({ y: this.scanlineY })
    }.width('100%').height('100%').animation({ duration: 2000 })
  }
}
