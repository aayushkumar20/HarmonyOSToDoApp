import { TaskDataModel } from '../models/TaskDataModel';
import { SciFiTheme } from '../theme/SciFiTheme';
import window from '@ohos.window';

@Entry
@Component
struct Index {
  @StorageLink('app_theme') appThemeStr: string = 'scifi';
  @State tasks: TaskDataModel[] = [];
  @State selectedDate: Date = new Date();
  
  aboutToAppear() {
    // Generate some mock tasks for preview purposes if empty
    if (this.tasks.length === 0) {
      this.tasks.push(new TaskDataModel("Initialize Core", "SYSTEM_BOOT", false, new Date()));
    }
  }

  isKawaii(): boolean {
    return this.appThemeStr === 'kawaii';
  }

  getDaysInWeek(): Date[] {
    let days: Date[] = [];
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 14; i++) {
      let d = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      days.push(d);
    }
    return days;
  }

  getFilteredTasks(): TaskDataModel[] {
    return this.tasks.filter(t => {
      let tD = new Date(t.dueDate);
      return tD.getFullYear() === this.selectedDate.getFullYear() &&
             tD.getMonth() === this.selectedDate.getMonth() &&
             tD.getDate() === this.selectedDate.getDate();
    });
  }

  build() {
    Stack() {
      // Deep Space / Kawaii Background
      Rect()
        .width('100%').height('100%')
        .fill(this.isKawaii() ? SciFiTheme.kawaiiBg : SciFiTheme.bgDeepSpace)
      
      // Decorative Overlay (Must not block touches)
      if (this.isKawaii()) {
        FloatingAnimalsOverlay()
      } else {
        FloatingBotsOverlay()
      }

      Column({ space: 24 }) {
        // Header Area
        Row() {
          Column({ space: 4 }) {
            Text(this.isKawaii() ? "Magic Checklist 🎀" : "SYS.TODOS: ONNX")
              .fontSize(22)
              .fontWeight(FontWeight.Bolder)
              .fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta)
              .fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace')
            
            Text(this.isKawaii() ? "Cute Magical Scanner 🐰✨" : "DATA_STREAM_ACTIVE")
              .fontSize(12)
              .fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan)
              .fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace')
              .opacity(0.8)
          }
          .alignItems(HorizontalAlign.Start)

          Blank()

          Row({ space: 10 }) {
            // Theme Switcher Toggle
            Button({ type: ButtonType.Circle }) {
              Text(this.isKawaii() ? "✨" : "⬡")
                .fontSize(18)
                .fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan)
            }
            .backgroundColor(this.isKawaii() ? '#33FF69B4' : '#1A00FFFF')
            .width(36).height(36)
            .onClick(() => {
              this.appThemeStr = this.isKawaii() ? 'scifi' : 'kawaii';
            })

            // Add Button
            Button({ type: ButtonType.Circle }) {
              Text("+")
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
                .fontColor(this.isKawaii() ? Color.White : SciFiTheme.neonCyan)
            }
            .backgroundColor(this.isKawaii() ? SciFiTheme.kawaiiPink : '#2600FFFF')
            .width(36).height(36)
            .onClick(() => {
              let newTask = new TaskDataModel("New Task", "MANUAL_INJECT", false, this.selectedDate);
              this.tasks.push(newTask);
            })

            // Scanner Button
            Button({ type: ButtonType.Circle }) {
              Text("📷")
                .fontSize(16)
            }
            .backgroundColor(this.isKawaii() ? SciFiTheme.kawaiiPink : 'transparent')
            .width(36).height(36)
            .border({ width: this.isKawaii() ? 0 : 1, color: SciFiTheme.neonMagenta })
            .onClick(() => {
              let newTask = new TaskDataModel("Scanned Document", "EXTRACT_SUCCESS", true, this.selectedDate);
              this.tasks.push(newTask);
            })
          }
        }
        .width('100%')
        .padding({ left: 24, right: 24, top: 50 }) // Account for status bar

        // Beautiful Chart
        CuteDashboardChart({ tasks: $tasks })

        // Horizontal Apple-style Calendar
        Scroll() {
          Row({ space: 12 }) {
            ForEach(this.getDaysInWeek(), (day: Date) => {
              Column({ space: 4 }) {
                Text(day.toString().substring(0,3))
                  .fontSize(12)
                  .fontWeight(FontWeight.Medium)
                  .fontColor(this.isSameDay(day, this.selectedDate) ? (this.isKawaii() ? Color.White : SciFiTheme.bgDeepSpace) : SciFiTheme.textSecondary)
                Text(day.getDate().toString())
                  .fontSize(18)
                  .fontWeight(FontWeight.Bolder)
                  .fontColor(this.isSameDay(day, this.selectedDate) ? (this.isKawaii() ? Color.White : SciFiTheme.bgDeepSpace) : SciFiTheme.textMain)
              }
              .width(55)
              .padding({ top: 12, bottom: 12 })
              .backgroundColor(this.isSameDay(day, this.selectedDate) ? (this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan) : (this.isKawaii() ? '#1AFF69B4' : SciFiTheme.panelBackground))
              .borderRadius(30)
              .onClick(() => {
                this.selectedDate = day;
              })
            })
          }
          .padding({ left: 24, right: 24 })
        }
        .scrollable(ScrollDirection.Horizontal)
        .scrollBar(BarState.Off)
        .width('100%')

        // Tasks List
        if (this.getFilteredTasks().length === 0) {
          Column() {
            Text(this.isKawaii() ? "No Magical Tasks Today! 🐹✨" : "AWAITING_NEURAL_LINK...")
              .fontSize(14)
              .fontWeight(FontWeight.Bold)
              .fontColor(SciFiTheme.textSecondary)
              .fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace')
          }
          .justifyContent(FlexAlign.Center)
          .layoutWeight(1)
        } else {
          List({ space: 12 }) {
            ForEach(this.getFilteredTasks(), (task: TaskDataModel) => {
              ListItem() {
                TaskRowView({ task: task })
              }
            })
          }
          .padding({ left: 24, right: 24, bottom: 20 })
          .scrollBar(BarState.Off)
          .layoutWeight(1)
        }
      }
      .width('100%')
      .height('100%')
    }
    .width('100%')
    .height('100%')
    .backgroundColor(this.isKawaii() ? SciFiTheme.kawaiiBg : SciFiTheme.bgDeepSpace)
  }

  isSameDay(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  }
}

// ----------------------------------------------------
// Subcomponents
// ----------------------------------------------------

@Component
struct CuteDashboardChart {
  @StorageLink('app_theme') appThemeStr: string = 'scifi';
  @Link tasks: TaskDataModel[];
  
  isKawaii(): boolean { return this.appThemeStr === 'kawaii'; }
  getCompletedCount(): number { return this.tasks.filter(t => t.completed).length; }
  getPendingCount(): number { return this.tasks.filter(t => !t.completed).length; }

  build() {
    Column({ space: 15 }) {
      Text(this.isKawaii() ? "Magical Progress 🌸" : "SYSTEM_DIAGNOSTICS")
        .fontSize(13)
        .fontWeight(FontWeight.Bold)
        .fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta)
        .fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace')
        .width('100%')
        .textAlign(TextAlign.Start)
      
      Row({ space: 20 }) {
        Column({ space: 8 }) {
          Text(this.isKawaii() ? "Finished! ✨" : "DATA_RESOLVED")
            .fontSize(10)
            .fontWeight(FontWeight.Bold)
            .fontColor(SciFiTheme.textSecondary)
          
          // Horizontal Bar for Completed
          Stack({ alignContent: Alignment.Start }) {
            Rect().width('100%').height(8).fill(this.isKawaii() ? '#1AFF69B4' : '#1A39FF14').borderRadius(4)
            Rect()
              .width(this.getCompletedCount() === 0 ? '5%' : Math.min(100, (this.getCompletedCount() / Math.max(1, this.tasks.length)) * 100) + '%')
              .height(8)
              .fill(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonGreen)
              .borderRadius(4)
              .animation({ duration: 300, curve: Curve.EaseOut })
          }.width('100%')
        }.layoutWeight(1).alignItems(HorizontalAlign.Start)
        
        Column({ space: 8 }) {
          Text(this.isKawaii() ? "To Do 🐰" : "PENDING_OPS")
            .fontSize(10)
            .fontWeight(FontWeight.Bold)
            .fontColor(SciFiTheme.textSecondary)
          
          // Horizontal Bar for Pending
          Stack({ alignContent: Alignment.Start }) {
            Rect().width('100%').height(8).fill(this.isKawaii() ? '#1A00FFFF' : '#1A00FFFF').borderRadius(4)
            Rect()
              .width(this.getPendingCount() === 0 ? '5%' : Math.min(100, (this.getPendingCount() / Math.max(1, this.tasks.length)) * 100) + '%')
              .height(8)
              .fill(SciFiTheme.neonCyan)
              .borderRadius(4)
              .animation({ duration: 300, curve: Curve.EaseOut })
          }.width('100%')
        }.layoutWeight(1).alignItems(HorizontalAlign.Start)
      }
      .width('100%')
    }
    .padding(20)
    .backgroundColor(this.isKawaii() ? '#FFFFFF' : SciFiTheme.panelBackground)
    .borderRadius(20)
    .margin({ left: 24, right: 24 })
    .shadow({ radius: 15, color: this.isKawaii() ? 'rgba(255, 105, 180, 0.1)' : 'rgba(0, 255, 255, 0.05)', offsetY: 5 })
  }
}

@Component
struct TaskRowView {
  @StorageLink('app_theme') appThemeStr: string = 'scifi';
  @ObjectLink task: TaskDataModel;
  
  isKawaii(): boolean { return this.appThemeStr === 'kawaii'; }

  build() {
    Row() {
      Column({ space: 8 }) {
        Row({ space: 6 }) {
          if (this.task.isMLGenerated) {
            Text(this.isKawaii() ? "🪄" : "⚡")
              .fontSize(14)
              .fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta)
          }
          Text(this.task.title)
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .fontColor(this.task.completed ? SciFiTheme.textSecondary : SciFiTheme.textMain)
            .decoration({ type: this.task.completed ? TextDecorationType.LineThrough : TextDecorationType.None })
            .fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace')
        }
        
        if (this.task.details) {
          Text(this.task.details)
            .fontSize(11)
            .fontColor(SciFiTheme.neonCyan)
            .fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace')
        }
        
        Row({ space: 4 }) {
          Text("🕒")
            .fontSize(10)
            .fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta)
          Text(this.task.dueDate.toLocaleTimeString().substring(0, 5))
            .fontSize(11)
            .fontWeight(FontWeight.Bold)
            .fontColor(SciFiTheme.textSecondary)
        }
      }
      .alignItems(HorizontalAlign.Start)
      
      Blank()
      
      Button({ type: ButtonType.Circle }) {
        Text(this.task.completed ? (this.isKawaii() ? "✓" : "⬢") : (this.isKawaii() ? "" : "⬡"))
          .fontSize(this.isKawaii() ? 18 : 26)
          .fontWeight(FontWeight.Bolder)
          .fontColor(this.task.completed ? (this.isKawaii() ? Color.White : SciFiTheme.neonGreen) : SciFiTheme.neonCyan)
      }
      .backgroundColor(this.task.completed && this.isKawaii() ? SciFiTheme.kawaiiPink : 'transparent')
      .width(36).height(36)
      .border({ width: this.isKawaii() ? (this.task.completed ? 0 : 2) : 0, color: this.isKawaii() ? SciFiTheme.kawaiiPink : 'transparent', radius: 18 })
      .onClick(() => {
        this.task.completed = !this.task.completed;
      })
    }
    .padding(20)
    .backgroundColor(this.isKawaii() ? '#FFFFFF' : SciFiTheme.panelBackground)
    .borderRadius(20)
    .width('100%')
    .shadow({ radius: 10, color: 'rgba(0,0,0,0.1)', offsetY: 4 })
  }
}

@Component
struct FloatingAnimalsOverlay {
  @State yOffset: number = 0;
  
  aboutToAppear() {
    setInterval(() => {
      this.yOffset = this.yOffset === 0 ? -15 : 0;
    }, 2000);
  }

  build() {
    Stack() {
      Text("🦄").fontSize(70).position({ x: '10%', y: '15%' }).opacity(0.15).translate({ y: this.yOffset }).animation({ duration: 2500, curve: Curve.EaseInOut })
      Text("🐼").fontSize(60).position({ x: '75%', y: '35%' }).opacity(0.15).translate({ y: -this.yOffset }).animation({ duration: 3000, curve: Curve.EaseInOut })
      Text("🎀").fontSize(80).position({ x: '45%', y: '75%' }).opacity(0.10).translate({ y: this.yOffset }).animation({ duration: 2000, curve: Curve.EaseInOut })
    }
    .width('100%').height('100%')
    .hitTestBehavior(HitTestMode.None)
  }
}

@Component
struct FloatingBotsOverlay {
  @State yOffset: number = 0;
  @State scanlineY: number = -100;

  aboutToAppear() {
    setInterval(() => {
      this.yOffset = this.yOffset === 0 ? -15 : 0;
    }, 2000);
    setInterval(() => {
      this.scanlineY = this.scanlineY > 1000 ? -100 : this.scanlineY + 10;
    }, 50);
  }

  build() {
    Stack() {
      // Drones
      Text("👾").fontSize(70).position({ x: '5%', y: '10%' }).opacity(0.15).translate({ y: this.yOffset }).animation({ duration: 2500, curve: Curve.EaseInOut })
      Text("🤖").fontSize(60).position({ x: '80%', y: '25%' }).opacity(0.15).translate({ y: -this.yOffset }).animation({ duration: 3000, curve: Curve.EaseInOut })
      Text("🛸").fontSize(80).position({ x: '40%', y: '80%' }).opacity(0.10).translate({ y: this.yOffset }).animation({ duration: 2000, curve: Curve.EaseInOut })
      
      // Cyberpunk Scanner Line
      Stack() {
        Rect()
          .width('100%')
          .height(2)
          .fill(SciFiTheme.neonCyan)
          .shadow({ radius: 10, color: SciFiTheme.neonCyan, offsetY: 0 })
        Rect()
          .width('100%')
          .height(100)
          .linearGradient({
            direction: GradientDirection.Bottom,
            colors: [[SciFiTheme.neonCyan, 0.0], ['rgba(0,0,0,0)', 1.0]]
          })
          .opacity(0.1)
      }
      .position({ y: this.scanlineY })
      .hitTestBehavior(HitTestMode.None)

    }
    .width('100%').height('100%')
    .hitTestBehavior(HitTestMode.None)
  }
}
