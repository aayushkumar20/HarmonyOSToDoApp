import { TaskDataModel } from '../models/TaskDataModel';
import { SciFiTheme } from '../theme/SciFiTheme';

@Entry
@Component
struct Index {
  @State isKawaii: boolean = false;
  @State tasks: TaskDataModel[] = [];
  @State selectedDate: Date = new Date();

  build() {
    Column() {
      // Header
      Row() {
        Column() {
          Text(this.isKawaii ? "Magic Checklist 🎀" : "SYS.TODOS: ONNX")
            .fontSize(24)
            .fontWeight(FontWeight.Bold)
            .fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta)
          Text(this.isKawaii ? "Cute Magical Scanner 🐰✨" : "DATA_STREAM_ACTIVE")
            .fontSize(14)
            .fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan)
        }.alignItems(HorizontalAlign.Start)
        
        Blank()
        
        // Theme Toggle
        Button({ type: ButtonType.Circle }) {
          Text(this.isKawaii ? "✨" : "⬡")
            .fontSize(20)
            .fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan)
        }
        .backgroundColor(SciFiTheme.panelBackground)
        .onClick(() => {
          this.isKawaii = !this.isKawaii;
        })
        .width(40).height(40).margin({ right: 10 })

        // Add Button
        Button({ type: ButtonType.Circle }) {
          Text("+")
            .fontSize(24)
            .fontColor(Color.White)
        }
        .backgroundColor(this.isKawaii ? SciFiTheme.neonCyan : '#2200FFFF')
        .onClick(() => {
          // Manual add logic
          let newTask = new TaskDataModel("New Manual Task", "MANUAL_INJECT", false, new Date());
          this.tasks.push(newTask);
        })
        .width(40).height(40).margin({ right: 10 })

        // Scanner Button
        Button({ type: ButtonType.Circle }) {
          Text("📷")
            .fontSize(20)
        }
        .backgroundColor(this.isKawaii ? SciFiTheme.neonMagenta : '#22FF00FF')
        .onClick(() => {
          // Scanner UI logic
          let newTask = new TaskDataModel("Scanned Bill", "EXTRACT_SUCCESS", true, new Date());
          this.tasks.push(newTask);
        })
        .width(40).height(40)

      }.width('100%').padding(20)

      // Filtered Task UI
      if (this.tasks.length === 0) {
        Column() {
          Text(this.isKawaii ? "No Magical Tasks Today! 🐹✨" : "AWAITING_NEURAL_LINK...")
            .fontSize(16)
            .fontColor(SciFiTheme.textSecondary)
        }.justifyContent(FlexAlign.Center).layoutWeight(1)
      } else {
        List({ space: 10 }) {
          ForEach(this.tasks, (item: TaskDataModel) => {
            ListItem() {
              Row() {
                Column() {
                  Text(item.title)
                    .fontSize(18)
                    .fontWeight(FontWeight.Bold)
                    .fontColor(item.completed ? SciFiTheme.textSecondary : SciFiTheme.textMain)
                    .decoration({ type: item.completed ? TextDecorationType.LineThrough : TextDecorationType.None })
                  if (item.details) {
                    Text(item.details)
                      .fontSize(12)
                      .fontColor(SciFiTheme.neonCyan)
                  }
                }.alignItems(HorizontalAlign.Start)
                
                Blank()
                
                Button({ type: ButtonType.Circle }) {
                  Text(item.completed ? "✓" : "○")
                    .fontSize(20)
                    .fontColor(item.completed ? SciFiTheme.neonGreen : SciFiTheme.neonCyan)
                }.backgroundColor(Color.Transparent).onClick(() => {
                  item.completed = !item.completed;
                  // Trigger UI update
                  this.tasks = [...this.tasks];
                })
              }
              .width('100%')
              .padding(15)
              .backgroundColor(SciFiTheme.panelBackground)
              .borderRadius(10)
            }
          })
        }.padding({ left: 20, right: 20 }).layoutWeight(1)
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor(this.isKawaii ? SciFiTheme.kawaiiBg : SciFiTheme.bgDeepSpace)
  }
}
