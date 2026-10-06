if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FloatingBotsOverlay_Params {
    yOffset?: number;
    scanlineY?: number;
}
interface FloatingAnimalsOverlay_Params {
    yOffset?: number;
}
interface TaskRowView_Params {
    appThemeStr?: string;
    task?: TaskDataModel;
}
interface CuteDashboardChart_Params {
    appThemeStr?: string;
    tasks?: TaskDataModel[];
}
interface Index_Params {
    appThemeStr?: string;
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
        this.__appThemeStr = this.createStorageLink('app_theme', 'scifi', "appThemeStr");
        this.__tasks = new ObservedPropertyObjectPU([], this, "tasks");
        this.__selectedDate = new ObservedPropertyObjectPU(new Date(), this, "selectedDate");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
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
        this.__appThemeStr.purgeDependencyOnElmtId(rmElmtId);
        this.__tasks.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedDate.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__appThemeStr.aboutToBeDeleted();
        this.__tasks.aboutToBeDeleted();
        this.__selectedDate.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __appThemeStr: ObservedPropertyAbstractPU<string>;
    get appThemeStr() {
        return this.__appThemeStr.get();
    }
    set appThemeStr(newValue: string) {
        this.__appThemeStr.set(newValue);
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
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(36:5)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Background
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(38:7)", "entry");
            // Background
            Rect.width('100%');
            // Background
            Rect.height('100%');
            // Background
            Rect.fill(this.isKawaii ? SciFiTheme.kawaiiBg : SciFiTheme.bgDeepSpace);
        }, Rect);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // Floating Overlay
            if (this.isKawaii) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new FloatingAnimalsOverlay(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 44, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "FloatingAnimalsOverlay" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new FloatingBotsOverlay(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 46, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "FloatingBotsOverlay" });
                    }
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(49:7)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Header Bar
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(51:9)", "entry");
            // Header Bar
            Row.width('100%');
            // Header Bar
            Row.padding({ left: 20, right: 20, top: 40 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(52:11)", "entry");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii ? "Magic Checklist 🎀" : "SYS.TODOS: ONNX");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(53:13)", "entry");
            Text.fontSize(24);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii ? "Cute Magical Scanner 🐰✨" : "DATA_STREAM_ACTIVE");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(57:13)", "entry");
            Text.fontSize(14);
            Text.fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/Index.ets(63:11)", "entry");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(65:11)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Theme Switcher Toggle
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(67:13)", "entry");
            // Theme Switcher Toggle
            Button.backgroundColor(SciFiTheme.panelBackground);
            // Theme Switcher Toggle
            Button.width(40);
            // Theme Switcher Toggle
            Button.height(40);
            // Theme Switcher Toggle
            Button.onClick(() => {
                this.appThemeStr = this.isKawaii ? 'scifi' : 'kawaii';
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii ? "✨" : "⬡");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(68:15)", "entry");
            Text.fontSize(20);
            Text.fontColor(this.isKawaii ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan);
        }, Text);
        Text.pop();
        // Theme Switcher Toggle
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Add Button
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(79:13)", "entry");
            // Add Button
            Button.backgroundColor(this.isKawaii ? SciFiTheme.neonCyan : '#2600FFFF');
            // Add Button
            Button.width(40);
            // Add Button
            Button.height(40);
            // Add Button
            Button.onClick(() => {
                let newTask = new TaskDataModel("New Manual Task", "MANUAL_INJECT", false, this.selectedDate);
                this.tasks.push(newTask);
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("+");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(80:15)", "entry");
            Text.fontSize(24);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(this.isKawaii ? Color.White : SciFiTheme.neonCyan);
        }, Text);
        Text.pop();
        // Add Button
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Scanner Button
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(93:13)", "entry");
            // Scanner Button
            Button.backgroundColor(this.isKawaii ? SciFiTheme.neonMagenta : '#26FF00FF');
            // Scanner Button
            Button.width(40);
            // Scanner Button
            Button.height(40);
            // Scanner Button
            Button.border({ width: this.isKawaii ? 0 : 1.5, color: SciFiTheme.neonMagenta });
            // Scanner Button
            Button.onClick(() => {
                let newTask = new TaskDataModel("Scanned Bill", "EXTRACT_SUCCESS", true, this.selectedDate);
                this.tasks.push(newTask);
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("📷");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(94:15)", "entry");
            Text.fontSize(20);
        }, Text);
        Text.pop();
        // Scanner Button
        Button.pop();
        Row.pop();
        // Header Bar
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Dashboard Charts
                    CuteDashboardChart(this, { tasks: this.tasks }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 110, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            tasks: this.tasks
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        tasks: this.tasks
                    });
                }
            }, { name: "CuteDashboardChart" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Apple Calendar Scroll View
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/Index.ets(113:9)", "entry");
            // Apple Calendar Scroll View
            Scroll.scrollable(ScrollDirection.Horizontal);
            // Apple Calendar Scroll View
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 15 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(114:11)", "entry");
            Row.padding({ left: 20, right: 20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const day = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/Index.ets(116:15)", "entry");
                    Column.padding({ top: 12, bottom: 12, left: 16, right: 16 });
                    Column.backgroundColor(this.isSameDay(day, ObservedObject.GetRawObject(this.selectedDate)) ? SciFiTheme.neonMagenta : '#990B132B');
                    Column.borderRadius(20);
                    Column.onClick(() => {
                        this.selectedDate = day;
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(day.toString().substring(0, 3));
                    Text.debugLine("entry/src/main/ets/pages/Index.ets(117:17)", "entry");
                    Text.fontSize(12);
                    Text.fontWeight(FontWeight.Bold);
                    Text.fontColor(this.isSameDay(day, ObservedObject.GetRawObject(this.selectedDate)) ? SciFiTheme.textMain : SciFiTheme.textSecondary);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(day.getDate().toString());
                    Text.debugLine("entry/src/main/ets/pages/Index.ets(121:17)", "entry");
                    Text.fontSize(18);
                    Text.fontWeight(FontWeight.Bolder);
                    Text.fontColor(this.isSameDay(day, ObservedObject.GetRawObject(this.selectedDate)) ? SciFiTheme.textMain : SciFiTheme.textMain);
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.daysInWeek, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        // Apple Calendar Scroll View
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // Filtered Task UI
            if (this.filteredTasks.length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("entry/src/main/ets/pages/Index.ets(141:11)", "entry");
                        Column.justifyContent(FlexAlign.Center);
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.isKawaii ? "No Magical Tasks Today! 🐹✨" : "AWAITING_NEURAL_LINK...");
                        Text.debugLine("entry/src/main/ets/pages/Index.ets(142:13)", "entry");
                        Text.fontSize(16);
                        Text.fontWeight(FontWeight.Bold);
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
                        List.debugLine("entry/src/main/ets/pages/Index.ets(150:11)", "entry");
                        List.padding({ left: 20, right: 20 });
                        List.layoutWeight(1);
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const task = _item;
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
                                    ListItem.debugLine("entry/src/main/ets/pages/Index.ets(152:15)", "entry");
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            if (isInitialRender) {
                                                let componentCall = new TaskRowView(this, { task: task }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 153, col: 17 });
                                                ViewPU.create(componentCall);
                                                let paramsLambda = () => {
                                                    return {
                                                        task: task
                                                    };
                                                };
                                                componentCall.paramsGenerator_ = paramsLambda;
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                                    task: task
                                                });
                                            }
                                        }, { name: "TaskRowView" });
                                    }
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.filteredTasks, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Stack.pop();
    }
    isSameDay(d1: Date, d2: Date): boolean {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
class CuteDashboardChart extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__appThemeStr = this.createStorageLink('app_theme', 'scifi', "appThemeStr");
        this.__tasks = new SynchedPropertyObjectOneWayPU(params.tasks, this, "tasks");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CuteDashboardChart_Params) {
    }
    updateStateVars(params: CuteDashboardChart_Params) {
        this.__tasks.reset(params.tasks);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__appThemeStr.purgeDependencyOnElmtId(rmElmtId);
        this.__tasks.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__appThemeStr.aboutToBeDeleted();
        this.__tasks.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __appThemeStr: ObservedPropertyAbstractPU<string>;
    get appThemeStr() {
        return this.__appThemeStr.get();
    }
    set appThemeStr(newValue: string) {
        this.__appThemeStr.set(newValue);
    }
    private __tasks: SynchedPropertySimpleOneWayPU<TaskDataModel[]>;
    get tasks() {
        return this.__tasks.get();
    }
    set tasks(newValue: TaskDataModel[]) {
        this.__tasks.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(181:5)", "entry");
            Column.padding(15);
            Column.backgroundColor(SciFiTheme.panelBackground);
            Column.borderRadius(15);
            Column.margin({ left: 20, right: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii ? "Magical Progress 🌸" : "SYSTEM_DIAGNOSTICS");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(182:7)", "entry");
            Text.fontSize(14);
            Text.fontColor(SciFiTheme.neonMagenta);
            Text.margin({ bottom: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(187:7)", "entry");
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(188:9)", "entry");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii ? "Finished! ✨" : "DATA_RESOLVED");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(189:11)", "entry");
            Text.fontSize(12);
            Text.fontColor(SciFiTheme.textSecondary);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(192:11)", "entry");
            Rect.width(Math.max(10, this.completedCount * 30) + 'px');
            Rect.height(20);
            Rect.fill(SciFiTheme.neonGreen);
            Rect.borderRadius(5);
        }, Rect);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/Index.ets(195:9)", "entry");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(197:9)", "entry");
            Column.alignItems(HorizontalAlign.End);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii ? "To Do 🐰" : "PENDING_OPS");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(198:11)", "entry");
            Text.fontSize(12);
            Text.fontColor(SciFiTheme.textSecondary);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(201:11)", "entry");
            Rect.width(Math.max(10, this.pendingCount * 30) + 'px');
            Rect.height(20);
            Rect.fill(SciFiTheme.neonCyan);
            Rect.borderRadius(5);
        }, Rect);
        Column.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class TaskRowView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__appThemeStr = this.createStorageLink('app_theme', 'scifi', "appThemeStr");
        this.__task = new SynchedPropertyNesedObjectPU(params.task, this, "task");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TaskRowView_Params) {
        this.__task.set(params.task);
    }
    updateStateVars(params: TaskRowView_Params) {
        this.__task.set(params.task);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__appThemeStr.purgeDependencyOnElmtId(rmElmtId);
        this.__task.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__appThemeStr.aboutToBeDeleted();
        this.__task.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __appThemeStr: ObservedPropertyAbstractPU<string>;
    get appThemeStr() {
        return this.__appThemeStr.get();
    }
    set appThemeStr(newValue: string) {
        this.__appThemeStr.set(newValue);
    }
    private __task: SynchedPropertyNesedObjectPU<TaskDataModel>;
    get task() {
        return this.__task.get();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(221:5)", "entry");
            Row.padding(15);
            Row.backgroundColor(SciFiTheme.panelBackground);
            Row.borderRadius(15);
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 6 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(222:7)", "entry");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(223:9)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.task.isMLGenerated) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.isKawaii ? "🪄 " : "⚡ ");
                        Text.debugLine("entry/src/main/ets/pages/Index.ets(225:13)", "entry");
                        Text.fontColor(SciFiTheme.neonMagenta);
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.task.title);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(228:11)", "entry");
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(this.task.completed ? SciFiTheme.textSecondary : SciFiTheme.textMain);
            Text.decoration({ type: this.task.completed ? TextDecorationType.LineThrough : TextDecorationType.None });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.task.details) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.task.details);
                        Text.debugLine("entry/src/main/ets/pages/Index.ets(236:11)", "entry");
                        Text.fontSize(10);
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(241:9)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🕒 ");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(242:11)", "entry");
            Text.fontColor(SciFiTheme.neonMagenta);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.task.dueDate.toLocaleTimeString());
            Text.debugLine("entry/src/main/ets/pages/Index.ets(244:11)", "entry");
            Text.fontSize(10);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(SciFiTheme.textSecondary);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/Index.ets(252:7)", "entry");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(254:7)", "entry");
            Button.backgroundColor(Color.Transparent);
            Button.onClick(() => {
                this.task.completed = !this.task.completed;
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.task.completed ? (this.isKawaii ? "✓" : "⬢") : (this.isKawaii ? "○" : "⬡"));
            Text.debugLine("entry/src/main/ets/pages/Index.ets(255:9)", "entry");
            Text.fontSize(24);
            Text.fontColor(this.task.completed ? SciFiTheme.neonGreen : SciFiTheme.neonCyan);
        }, Text);
        Text.pop();
        Button.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class FloatingAnimalsOverlay extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__yOffset = new ObservedPropertySimplePU(0, this, "yOffset");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FloatingAnimalsOverlay_Params) {
        if (params.yOffset !== undefined) {
            this.yOffset = params.yOffset;
        }
    }
    updateStateVars(params: FloatingAnimalsOverlay_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__yOffset.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__yOffset.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __yOffset: ObservedPropertySimplePU<number>;
    get yOffset() {
        return this.__yOffset.get();
    }
    set yOffset(newValue: number) {
        this.__yOffset.set(newValue);
    }
    aboutToAppear() {
        setInterval(() => {
            this.yOffset = this.yOffset === 0 ? -20 : 0;
        }, 2000);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(282:5)", "entry");
            globalThis.Context.animation({ duration: 2000 });
            Stack.width('100%');
            Stack.height('100%');
            globalThis.Context.animation(null);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🦄");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(283:7)", "entry");
            Text.fontSize(60);
            Text.position({ x: '20%', y: '20%' });
            Text.opacity(0.3);
            Text.translate({ y: this.yOffset });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🐼");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(284:7)", "entry");
            Text.fontSize(50);
            Text.position({ x: '70%', y: '40%' });
            Text.opacity(0.3);
            Text.translate({ y: -this.yOffset });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🎀");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(285:7)", "entry");
            Text.fontSize(70);
            Text.position({ x: '40%', y: '70%' });
            Text.opacity(0.2);
            Text.translate({ y: this.yOffset });
        }, Text);
        Text.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class FloatingBotsOverlay extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__yOffset = new ObservedPropertySimplePU(0, this, "yOffset");
        this.__scanlineY = new ObservedPropertySimplePU(-200, this, "scanlineY");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FloatingBotsOverlay_Params) {
        if (params.yOffset !== undefined) {
            this.yOffset = params.yOffset;
        }
        if (params.scanlineY !== undefined) {
            this.scanlineY = params.scanlineY;
        }
    }
    updateStateVars(params: FloatingBotsOverlay_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__yOffset.purgeDependencyOnElmtId(rmElmtId);
        this.__scanlineY.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__yOffset.aboutToBeDeleted();
        this.__scanlineY.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __yOffset: ObservedPropertySimplePU<number>;
    get yOffset() {
        return this.__yOffset.get();
    }
    set yOffset(newValue: number) {
        this.__yOffset.set(newValue);
    }
    private __scanlineY: ObservedPropertySimplePU<number>;
    get scanlineY() {
        return this.__scanlineY.get();
    }
    set scanlineY(newValue: number) {
        this.__scanlineY.set(newValue);
    }
    aboutToAppear() {
        setInterval(() => {
            this.yOffset = this.yOffset === 0 ? -20 : 0;
        }, 2000);
        setInterval(() => {
            this.scanlineY = this.scanlineY > 800 ? -200 : this.scanlineY + 5;
        }, 50);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(305:5)", "entry");
            globalThis.Context.animation({ duration: 2000 });
            Stack.width('100%');
            Stack.height('100%');
            globalThis.Context.animation(null);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("👾");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(306:7)", "entry");
            Text.fontSize(60);
            Text.position({ x: '10%', y: '15%' });
            Text.opacity(0.3);
            Text.translate({ y: this.yOffset });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🤖");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(307:7)", "entry");
            Text.fontSize(50);
            Text.position({ x: '80%', y: '30%' });
            Text.opacity(0.3);
            Text.translate({ y: -this.yOffset });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🛸");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(308:7)", "entry");
            Text.fontSize(70);
            Text.position({ x: '50%', y: '80%' });
            Text.opacity(0.2);
            Text.translate({ y: this.yOffset });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(310:7)", "entry");
            Rect.width('100%');
            Rect.height(60);
            Rect.fill(SciFiTheme.neonCyan);
            Rect.opacity(0.2);
            Rect.position({ y: this.scanlineY });
        }, Rect);
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.scifi.todos", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
