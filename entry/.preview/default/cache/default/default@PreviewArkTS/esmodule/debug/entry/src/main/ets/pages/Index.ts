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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(44:5)", "entry");
            Stack.width('100%');
            Stack.height('100%');
            Stack.backgroundColor(this.isKawaii() ? SciFiTheme.kawaiiBg : SciFiTheme.bgDeepSpace);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Deep Space / Kawaii Background
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(46:7)", "entry");
            // Deep Space / Kawaii Background
            Rect.width('100%');
            // Deep Space / Kawaii Background
            Rect.height('100%');
            // Deep Space / Kawaii Background
            Rect.fill(this.isKawaii() ? SciFiTheme.kawaiiBg : SciFiTheme.bgDeepSpace);
        }, Rect);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // Decorative Overlay (Must not block touches)
            if (this.isKawaii()) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new FloatingAnimalsOverlay(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 52, col: 9 });
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
                                let componentCall = new FloatingBotsOverlay(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 54, col: 9 });
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
            Column.create({ space: 24 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(57:7)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Header Area
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(59:9)", "entry");
            // Header Area
            Row.width('100%');
            // Header Area
            Row.padding({ left: 24, right: 24, top: 50 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(60:11)", "entry");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii() ? "Magic Checklist 🎀" : "SYS.TODOS: ONNX");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(61:13)", "entry");
            Text.fontSize(22);
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta);
            Text.fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii() ? "Cute Magical Scanner 🐰✨" : "DATA_STREAM_ACTIVE");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(67:13)", "entry");
            Text.fontSize(12);
            Text.fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan);
            Text.fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace');
            Text.opacity(0.8);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/Index.ets(75:11)", "entry");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(77:11)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Theme Switcher Toggle
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(79:13)", "entry");
            // Theme Switcher Toggle
            Button.backgroundColor(this.isKawaii() ? '#33FF69B4' : '#1A00FFFF');
            // Theme Switcher Toggle
            Button.width(36);
            // Theme Switcher Toggle
            Button.height(36);
            // Theme Switcher Toggle
            Button.onClick(() => {
                this.appThemeStr = this.isKawaii() ? 'scifi' : 'kawaii';
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii() ? "✨" : "⬡");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(80:15)", "entry");
            Text.fontSize(18);
            Text.fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan);
        }, Text);
        Text.pop();
        // Theme Switcher Toggle
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Add Button
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(91:13)", "entry");
            // Add Button
            Button.backgroundColor(this.isKawaii() ? SciFiTheme.kawaiiPink : '#2600FFFF');
            // Add Button
            Button.width(36);
            // Add Button
            Button.height(36);
            // Add Button
            Button.onClick(() => {
                let newTask = new TaskDataModel("New Task", "MANUAL_INJECT", false, this.selectedDate);
                this.tasks.push(newTask);
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("+");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(92:15)", "entry");
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(this.isKawaii() ? Color.White : SciFiTheme.neonCyan);
        }, Text);
        Text.pop();
        // Add Button
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Scanner Button
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(105:13)", "entry");
            // Scanner Button
            Button.backgroundColor(this.isKawaii() ? SciFiTheme.kawaiiPink : 'transparent');
            // Scanner Button
            Button.width(36);
            // Scanner Button
            Button.height(36);
            // Scanner Button
            Button.border({ width: this.isKawaii() ? 0 : 1, color: SciFiTheme.neonMagenta });
            // Scanner Button
            Button.onClick(() => {
                let newTask = new TaskDataModel("Scanned Document", "EXTRACT_SUCCESS", true, this.selectedDate);
                this.tasks.push(newTask);
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("📷");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(106:15)", "entry");
            Text.fontSize(16);
        }, Text);
        Text.pop();
        // Scanner Button
        Button.pop();
        Row.pop();
        // Header Area
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Beautiful Chart
                    CuteDashboardChart(this, { tasks: this.__tasks }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 122, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            tasks: this.tasks
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CuteDashboardChart" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Horizontal Apple-style Calendar
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/Index.ets(125:9)", "entry");
            // Horizontal Apple-style Calendar
            Scroll.scrollable(ScrollDirection.Horizontal);
            // Horizontal Apple-style Calendar
            Scroll.scrollBar(BarState.Off);
            // Horizontal Apple-style Calendar
            Scroll.width('100%');
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(126:11)", "entry");
            Row.padding({ left: 24, right: 24 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const day = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 4 });
                    Column.debugLine("entry/src/main/ets/pages/Index.ets(128:15)", "entry");
                    Column.width(55);
                    Column.padding({ top: 12, bottom: 12 });
                    Column.backgroundColor(this.isSameDay(day, ObservedObject.GetRawObject(this.selectedDate)) ? (this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonCyan) : (this.isKawaii() ? '#1AFF69B4' : SciFiTheme.panelBackground));
                    Column.borderRadius(30);
                    Column.onClick(() => {
                        this.selectedDate = day;
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(day.toString().substring(0, 3));
                    Text.debugLine("entry/src/main/ets/pages/Index.ets(129:17)", "entry");
                    Text.fontSize(12);
                    Text.fontWeight(FontWeight.Medium);
                    Text.fontColor(this.isSameDay(day, ObservedObject.GetRawObject(this.selectedDate)) ? (this.isKawaii() ? Color.White : SciFiTheme.bgDeepSpace) : SciFiTheme.textSecondary);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(day.getDate().toString());
                    Text.debugLine("entry/src/main/ets/pages/Index.ets(133:17)", "entry");
                    Text.fontSize(18);
                    Text.fontWeight(FontWeight.Bolder);
                    Text.fontColor(this.isSameDay(day, ObservedObject.GetRawObject(this.selectedDate)) ? (this.isKawaii() ? Color.White : SciFiTheme.bgDeepSpace) : SciFiTheme.textMain);
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.getDaysInWeek(), forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        // Horizontal Apple-style Calendar
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // Tasks List
            if (this.getFilteredTasks().length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("entry/src/main/ets/pages/Index.ets(155:11)", "entry");
                        Column.justifyContent(FlexAlign.Center);
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.isKawaii() ? "No Magical Tasks Today! 🐹✨" : "AWAITING_NEURAL_LINK...");
                        Text.debugLine("entry/src/main/ets/pages/Index.ets(156:13)", "entry");
                        Text.fontSize(14);
                        Text.fontWeight(FontWeight.Bold);
                        Text.fontColor(SciFiTheme.textSecondary);
                        Text.fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace');
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create({ space: 12 });
                        List.debugLine("entry/src/main/ets/pages/Index.ets(165:11)", "entry");
                        List.padding({ left: 24, right: 24, bottom: 20 });
                        List.scrollBar(BarState.Off);
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
                                    ListItem.debugLine("entry/src/main/ets/pages/Index.ets(167:15)", "entry");
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            if (isInitialRender) {
                                                let componentCall = new TaskRowView(this, { task: task }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 168, col: 17 });
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
                        this.forEachUpdateFunction(elmtId, this.getFilteredTasks(), forEachItemGenFunction);
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
        this.__tasks = new SynchedPropertyObjectTwoWayPU(params.tasks, this, "tasks");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CuteDashboardChart_Params) {
    }
    updateStateVars(params: CuteDashboardChart_Params) {
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
    isKawaii(): boolean { return this.appThemeStr === 'kawaii'; }
    getCompletedCount(): number { return this.tasks.filter(t => t.completed).length; }
    getPendingCount(): number { return this.tasks.filter(t => !t.completed).length; }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 15 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(206:5)", "entry");
            Column.padding(20);
            Column.backgroundColor(this.isKawaii() ? '#FFFFFF' : SciFiTheme.panelBackground);
            Column.borderRadius(20);
            Column.margin({ left: 24, right: 24 });
            Column.shadow({ radius: 15, color: this.isKawaii() ? 'rgba(255, 105, 180, 0.1)' : 'rgba(0, 255, 255, 0.05)', offsetY: 5 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii() ? "Magical Progress 🌸" : "SYSTEM_DIAGNOSTICS");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(207:7)", "entry");
            Text.fontSize(13);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta);
            Text.fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace');
            Text.width('100%');
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 20 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(215:7)", "entry");
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(216:9)", "entry");
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii() ? "Finished! ✨" : "DATA_RESOLVED");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(217:11)", "entry");
            Text.fontSize(10);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(SciFiTheme.textSecondary);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Horizontal Bar for Completed
            Stack.create({ alignContent: Alignment.Start });
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(223:11)", "entry");
            // Horizontal Bar for Completed
            Stack.width('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(224:13)", "entry");
            Rect.width('100%');
            Rect.height(8);
            Rect.fill(this.isKawaii() ? '#1AFF69B4' : '#1A39FF14');
            Rect.borderRadius(4);
        }, Rect);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(225:13)", "entry");
            globalThis.Context.animation({ duration: 300, curve: Curve.EaseOut });
            Rect.width(this.getCompletedCount() === 0 ? '5%' : Math.min(100, (this.getCompletedCount() / Math.max(1, this.tasks.length)) * 100) + '%');
            Rect.height(8);
            Rect.fill(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonGreen);
            Rect.borderRadius(4);
            globalThis.Context.animation(null);
        }, Rect);
        // Horizontal Bar for Completed
        Stack.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(234:9)", "entry");
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isKawaii() ? "To Do 🐰" : "PENDING_OPS");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(235:11)", "entry");
            Text.fontSize(10);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(SciFiTheme.textSecondary);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Horizontal Bar for Pending
            Stack.create({ alignContent: Alignment.Start });
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(241:11)", "entry");
            // Horizontal Bar for Pending
            Stack.width('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(242:13)", "entry");
            Rect.width('100%');
            Rect.height(8);
            Rect.fill(this.isKawaii() ? '#1A00FFFF' : '#1A00FFFF');
            Rect.borderRadius(4);
        }, Rect);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(243:13)", "entry");
            globalThis.Context.animation({ duration: 300, curve: Curve.EaseOut });
            Rect.width(this.getPendingCount() === 0 ? '5%' : Math.min(100, (this.getPendingCount() / Math.max(1, this.tasks.length)) * 100) + '%');
            Rect.height(8);
            Rect.fill(SciFiTheme.neonCyan);
            Rect.borderRadius(4);
            globalThis.Context.animation(null);
        }, Rect);
        // Horizontal Bar for Pending
        Stack.pop();
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
    isKawaii(): boolean { return this.appThemeStr === 'kawaii'; }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(270:5)", "entry");
            Row.padding(20);
            Row.backgroundColor(this.isKawaii() ? '#FFFFFF' : SciFiTheme.panelBackground);
            Row.borderRadius(20);
            Row.width('100%');
            Row.shadow({ radius: 10, color: 'rgba(0,0,0,0.1)', offsetY: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(271:7)", "entry");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 6 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(272:9)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.task.isMLGenerated) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.isKawaii() ? "🪄" : "⚡");
                        Text.debugLine("entry/src/main/ets/pages/Index.ets(274:13)", "entry");
                        Text.fontSize(14);
                        Text.fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta);
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
            Text.debugLine("entry/src/main/ets/pages/Index.ets(278:11)", "entry");
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(this.task.completed ? SciFiTheme.textSecondary : SciFiTheme.textMain);
            Text.decoration({ type: this.task.completed ? TextDecorationType.LineThrough : TextDecorationType.None });
            Text.fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.task.details) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.task.details);
                        Text.debugLine("entry/src/main/ets/pages/Index.ets(287:11)", "entry");
                        Text.fontSize(11);
                        Text.fontColor(SciFiTheme.neonCyan);
                        Text.fontFamily(this.isKawaii() ? 'sans-serif' : 'monospace');
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
            Row.create({ space: 4 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(293:9)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🕒");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(294:11)", "entry");
            Text.fontSize(10);
            Text.fontColor(this.isKawaii() ? SciFiTheme.kawaiiPink : SciFiTheme.neonMagenta);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.task.dueDate.toLocaleTimeString().substring(0, 5));
            Text.debugLine("entry/src/main/ets/pages/Index.ets(297:11)", "entry");
            Text.fontSize(11);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(SciFiTheme.textSecondary);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/Index.ets(305:7)", "entry");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(307:7)", "entry");
            Button.backgroundColor(this.task.completed && this.isKawaii() ? SciFiTheme.kawaiiPink : 'transparent');
            Button.width(36);
            Button.height(36);
            Button.border({ width: this.isKawaii() ? (this.task.completed ? 0 : 2) : 0, color: this.isKawaii() ? SciFiTheme.kawaiiPink : 'transparent', radius: 18 });
            Button.onClick(() => {
                this.task.completed = !this.task.completed;
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.task.completed ? (this.isKawaii() ? "✓" : "⬢") : (this.isKawaii() ? "" : "⬡"));
            Text.debugLine("entry/src/main/ets/pages/Index.ets(308:9)", "entry");
            Text.fontSize(this.isKawaii() ? 18 : 26);
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor(this.task.completed ? (this.isKawaii() ? Color.White : SciFiTheme.neonGreen) : SciFiTheme.neonCyan);
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
            this.yOffset = this.yOffset === 0 ? -15 : 0;
        }, 2000);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(339:5)", "entry");
            Stack.width('100%');
            Stack.height('100%');
            Stack.hitTestBehavior(HitTestMode.None);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🦄");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(340:7)", "entry");
            globalThis.Context.animation({ duration: 2500, curve: Curve.EaseInOut });
            Text.fontSize(70);
            Text.position({ x: '10%', y: '15%' });
            Text.opacity(0.15);
            Text.translate({ y: this.yOffset });
            globalThis.Context.animation(null);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🐼");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(341:7)", "entry");
            globalThis.Context.animation({ duration: 3000, curve: Curve.EaseInOut });
            Text.fontSize(60);
            Text.position({ x: '75%', y: '35%' });
            Text.opacity(0.15);
            Text.translate({ y: -this.yOffset });
            globalThis.Context.animation(null);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🎀");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(342:7)", "entry");
            globalThis.Context.animation({ duration: 2000, curve: Curve.EaseInOut });
            Text.fontSize(80);
            Text.position({ x: '45%', y: '75%' });
            Text.opacity(0.10);
            Text.translate({ y: this.yOffset });
            globalThis.Context.animation(null);
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
        this.__scanlineY = new ObservedPropertySimplePU(-100, this, "scanlineY");
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
            this.yOffset = this.yOffset === 0 ? -15 : 0;
        }, 2000);
        setInterval(() => {
            this.scanlineY = this.scanlineY > 1000 ? -100 : this.scanlineY + 10;
        }, 50);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(364:5)", "entry");
            Stack.width('100%');
            Stack.height('100%');
            Stack.hitTestBehavior(HitTestMode.None);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Drones
            Text.create("👾");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(366:7)", "entry");
            globalThis.Context.animation({ duration: 2500, curve: Curve.EaseInOut });
            // Drones
            Text.fontSize(70);
            // Drones
            Text.position({ x: '5%', y: '10%' });
            // Drones
            Text.opacity(0.15);
            // Drones
            Text.translate({ y: this.yOffset });
            globalThis.Context.animation(null);
        }, Text);
        // Drones
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🤖");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(367:7)", "entry");
            globalThis.Context.animation({ duration: 3000, curve: Curve.EaseInOut });
            Text.fontSize(60);
            Text.position({ x: '80%', y: '25%' });
            Text.opacity(0.15);
            Text.translate({ y: -this.yOffset });
            globalThis.Context.animation(null);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("🛸");
            Text.debugLine("entry/src/main/ets/pages/Index.ets(368:7)", "entry");
            globalThis.Context.animation({ duration: 2000, curve: Curve.EaseInOut });
            Text.fontSize(80);
            Text.position({ x: '40%', y: '80%' });
            Text.opacity(0.10);
            Text.translate({ y: this.yOffset });
            globalThis.Context.animation(null);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Cyberpunk Scanner Line
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(371:7)", "entry");
            // Cyberpunk Scanner Line
            Stack.position({ y: this.scanlineY });
            // Cyberpunk Scanner Line
            Stack.hitTestBehavior(HitTestMode.None);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(372:9)", "entry");
            Rect.width('100%');
            Rect.height(2);
            Rect.fill(SciFiTheme.neonCyan);
            Rect.shadow({ radius: 10, color: SciFiTheme.neonCyan, offsetY: 0 });
        }, Rect);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rect.create();
            Rect.debugLine("entry/src/main/ets/pages/Index.ets(377:9)", "entry");
            Rect.width('100%');
            Rect.height(100);
            Rect.linearGradient({
                direction: GradientDirection.Bottom,
                colors: [[SciFiTheme.neonCyan, 0.0], ['rgba(0,0,0,0)', 1.0]]
            });
            Rect.opacity(0.1);
        }, Rect);
        // Cyberpunk Scanner Line
        Stack.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.scifi.todos", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
