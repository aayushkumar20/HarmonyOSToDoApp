if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    isKawaii?: boolean;
    tasks?: TaskDataModel[];
    selectedDate?: Date;
}
import { TaskDataModel } from "@bundle:com.scifi.todos/entry/ets/models/TaskDataModel";
import { SciFiTheme } from "@bundle:com.scifi.todos/entry/ets/theme/SciFiTheme";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isKawaii = new ObservedPropertySimplePU(false, this, "isKawaii");
        this.__tasks = new ObservedPropertyObjectPU([], this, "tasks");
        this.__selectedDate = new ObservedPropertyObjectPU(new Date(), this, "selectedDate");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.isKawaii !== undefined) {
            this.isKawaii = params.isKawaii;
        }
        if (params.tasks !== undefined) {
            this.tasks = params.tasks;
        }
        if (params.selectedDate !== undefined) {
            this.selectedDate = params.selectedDate;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isKawaii.purgeDependencyOnElmtId(rmElmtId);
        this.__tasks.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedDate.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isKawaii.aboutToBeDeleted();
        this.__tasks.aboutToBeDeleted();
        this.__selectedDate.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isKawaii: ObservedPropertySimplePU<boolean>;
    get isKawaii() {
        return this.__isKawaii.get();
    }
    set isKawaii(newValue: boolean) {
        this.__isKawaii.set(newValue);
    }
    private __tasks: ObservedPropertyObjectPU<TaskDataModel[]>;
    get tasks() {
        return this.__tasks.get();
    }
    set tasks(newValue: TaskDataModel[]) {
        this.__tasks.set(newValue);
    }
    private __selectedDate: ObservedPropertyObjectPU<Date>;
    get selectedDate() {
        return this.__selectedDate.get();
    }
    set selectedDate(newValue: Date) {
        this.__selectedDate.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(12:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(this.isKawaii ? SciFiTheme.kawaiiBg : SciFiTheme.bgDeepSpace);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Header
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(14:7)", "entry");
            // Header
            Row.width('100%');
            // Header
            Row.padding(20);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(15:9)", "entry");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii ? "Magic Checklist 🎀" : "SYS.TODOS: ONNX");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(16:11)", "entry");
            Text.fontSize(24);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii ? "Cute Magical Scanner 🐰✨" : "DATA_STREAM_ACTIVE");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(20:11)", "entry");
            Text.fontSize(14);
            Text.fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/Index.ets(25:9)", "entry");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Theme Toggle
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(28:9)", "entry");
            // Theme Toggle
            Button.backgroundColor(SciFiTheme.panelBackground);
            // Theme Toggle
            Button.onClick(() => {
                this.isKawaii = !this.isKawaii;
            });
            // Theme Toggle
            Button.width(40);
            // Theme Toggle
            Button.height(40);
            // Theme Toggle
            Button.margin({ right: 10 });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii ? "✨" : "⬡");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(29:11)", "entry");
            Text.fontSize(20);
            Text.fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan);
        }, Text);
        Text.pop();
        // Theme Toggle
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Add Button
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(40:9)", "entry");
            // Add Button
            Button.backgroundColor(this.isKawaii ? SciFiTheme.neonCyan : '#2200FFFF');
            // Add Button
            Button.onClick(() => {
                // Manual add logic
                let newTask = new TaskDataModel("New Manual Task", "MANUAL_INJECT", false, new Date());
                this.tasks.push(newTask);
            });
            // Add Button
            Button.width(40);
            // Add Button
            Button.height(40);
            // Add Button
            Button.margin({ right: 10 });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("+");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(41:11)", "entry");
            Text.fontSize(24);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        // Add Button
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Scanner Button
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(54:9)", "entry");
            // Scanner Button
            Button.backgroundColor(this.isKawaii ? SciFiTheme.neonMagenta : '#22FF00FF');
            // Scanner Button
            Button.onClick(() => {
                // Scanner UI logic
                let newTask = new TaskDataModel("Scanned Bill", "EXTRACT_SUCCESS", true, new Date());
                this.tasks.push(newTask);
            });
            // Scanner Button
            Button.width(40);
            // Scanner Button
            Button.height(40);
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("📷");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(55:11)", "entry");
            Text.fontSize(20);
        }, Text);
        Text.pop();
        // Scanner Button
        Button.pop();
        // Header
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // Filtered Task UI
            if (this.tasks.length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("entry/src/main/ets/pages/Index.ets(70:9)", "entry");
                        Column.justifyContent(FlexAlign.Center);
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.isKawaii ? "No Magical Tasks Today! 🐹✨" : "AWAITING_NEURAL_LINK...");
                        Text.debugLine("entry/src/main/ets/pages/Index.ets(71:11)", "entry");
                        Text.fontSize(16);
                        Text.fontColor(SciFiTheme.textSecondary);
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create({ space: 10 });
                        List.debugLine("entry/src/main/ets/pages/Index.ets(76:9)", "entry");
                        List.padding({ left: 20, right: 20 });
                        List.layoutWeight(1);
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            {
                                const itemCreation = (elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    ListItem.create(deepRenderFunction, true);
                                    if (!isInitialRender) {
                                        ListItem.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                };
                                const itemCreation2 = (elmtId, isInitialRender) => {
                                    ListItem.create(deepRenderFunction, true);
                                    ListItem.debugLine("entry/src/main/ets/pages/Index.ets(78:13)", "entry");
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Row.create();
                                        Row.debugLine("entry/src/main/ets/pages/Index.ets(79:15)", "entry");
                                        Row.width('100%');
                                        Row.padding(15);
                                        Row.backgroundColor(SciFiTheme.panelBackground);
                                        Row.borderRadius(10);
                                    }, Row);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Column.create();
                                        Column.debugLine("entry/src/main/ets/pages/Index.ets(80:17)", "entry");
                                        Column.alignItems(HorizontalAlign.Start);
                                    }, Column);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(item.title);
                                        Text.debugLine("entry/src/main/ets/pages/Index.ets(81:19)", "entry");
                                        Text.fontSize(18);
                                        Text.fontWeight(FontWeight.Bold);
                                        Text.fontColor(item.completed ? SciFiTheme.textSecondary : SciFiTheme.textMain);
                                        Text.decoration({ type: item.completed ? TextDecorationType.LineThrough : TextDecorationType.None });
                                    }, Text);
                                    Text.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        If.create();
                                        if (item.details) {
                                            this.ifElseBranchUpdateFunction(0, () => {
                                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                    Text.create(item.details);
                                                    Text.debugLine("entry/src/main/ets/pages/Index.ets(87:21)", "entry");
                                                    Text.fontSize(12);
                                                    Text.fontColor(SciFiTheme.neonCyan);
                                                }, Text);
                                                Text.pop();
                                            });
                                        }
                                        else {
                                            this.ifElseBranchUpdateFunction(1, () => {
                                            });
                                        }
                                    }, If);
                                    If.pop();
                                    Column.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Blank.create();
                                        Blank.debugLine("entry/src/main/ets/pages/Index.ets(93:17)", "entry");
                                    }, Blank);
                                    Blank.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Button.createWithChild({ type: ButtonType.Circle });
                                        Button.debugLine("entry/src/main/ets/pages/Index.ets(95:17)", "entry");
                                        Button.backgroundColor(Color.Transparent);
                                        Button.onClick(() => {
                                            item.completed = !item.completed;
                                            // Trigger UI update
                                            this.tasks = [...this.tasks];
                                        });
                                    }, Button);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(item.completed ? "✓" : "○");
                                        Text.debugLine("entry/src/main/ets/pages/Index.ets(96:19)", "entry");
                                        Text.fontSize(20);
                                        Text.fontColor(item.completed ? SciFiTheme.neonGreen : SciFiTheme.neonCyan);
                                    }, Text);
                                    Text.pop();
                                    Button.pop();
                                    Row.pop();
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.tasks, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.scifi.todos", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
