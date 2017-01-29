/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './message-list.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './message.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_for';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from './message.component';
import * as import15 from './message.component.ngfactory';
var renderType_MessageListComponent_Host:import0.RenderComponentType = (null as any);
class _View_MessageListComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MessageListComponent_0_4:import3.MessageListComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageListComponent_Host0,renderType_MessageListComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-message-list',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MessageListComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MessageListComponent_0_4 = new import3.MessageListComponent(this.parentInjector.get(import8.MessageService));
    this._appEl_0.initComponent(this._MessageListComponent_0_4,[],compView_0);
    compView_0.create(this._MessageListComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MessageListComponent) && (0 === requestNodeIndex))) { return this._MessageListComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MessageListComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MessageListComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MessageListComponent_Host === (null as any))) { (renderType_MessageListComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_MessageListComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const MessageListComponentNgFactory:import10.ComponentFactory<import3.MessageListComponent> = new import10.ComponentFactory<import3.MessageListComponent>('app-message-list',viewFactory_MessageListComponent_Host0,import3.MessageListComponent);
const styles_MessageListComponent:any[] = [];
var renderType_MessageListComponent:import0.RenderComponentType = (null as any);
class _View_MessageListComponent0 extends import1.AppView<import3.MessageListComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import11.NgFor;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageListComponent0,renderType_MessageListComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n		',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','col-md-8 col-md-offset-2');
    this._text_2 = this.renderer.createText(this._el_1,'\n			',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import2.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import12.TemplateRef_(this._appEl_3,viewFactory_MessageListComponent1);
    this._NgFor_3_6 = new import11.NgFor(this._appEl_3.vcRef,this._TemplateRef_3_5,this.parentInjector.get(import13.IterableDiffers),this.ref);
    this._text_4 = this.renderer.createText(this._el_1,'\n		',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n	',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._text_5
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import11.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.context.messages;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_3_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_3_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_3_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_MessageListComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MessageListComponent> {
  if ((renderType_MessageListComponent === (null as any))) { (renderType_MessageListComponent = viewUtils.createRenderComponentType('C:/Projects/UdemyAngularApp/assets/app/messages/message-list.component.ts class MessageListComponent - inline template',0,import9.ViewEncapsulation.None,styles_MessageListComponent,{})); }
  return new _View_MessageListComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_MessageListComponent1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MessageComponent_0_4:import14.MessageComponent;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageListComponent1,renderType_MessageListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'app-message',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import15.viewFactory_MessageComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MessageComponent_0_4 = new import14.MessageComponent(this.parent.parentInjector.get(import8.MessageService));
    this._appEl_0.initComponent(this._MessageComponent_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n					\n			',(null as any));
    compView_0.create(this._MessageComponent_0_4,[],(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.MessageComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MessageComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.$implicit;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._MessageComponent_0_4.message = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MessageListComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MessageListComponent1(viewUtils,parentInjector,declarationEl);
}