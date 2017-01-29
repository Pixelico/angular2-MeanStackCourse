/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './message.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './message.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '@angular/core/src/linker/template_ref';
var renderType_MessageComponent_Host = null;
var _View_MessageComponent_Host0 = (function (_super) {
    __extends(_View_MessageComponent_Host0, _super);
    function _View_MessageComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessageComponent_Host0, renderType_MessageComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessageComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-message', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MessageComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MessageComponent_0_4 = new import3.MessageComponent(this.parentInjector.get(import8.MessageService));
        this._appEl_0.initComponent(this._MessageComponent_0_4, [], compView_0);
        compView_0.create(this._MessageComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MessageComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.MessageComponent) && (0 === requestNodeIndex))) {
            return this._MessageComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_MessageComponent_Host0;
}(import1.AppView));
function viewFactory_MessageComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MessageComponent_Host === null)) {
        (renderType_MessageComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_MessageComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var MessageComponentNgFactory = new import10.ComponentFactory('app-message', viewFactory_MessageComponent_Host0, import3.MessageComponent);
var styles_MessageComponent = ['.author[_ngcontent-%COMP%]{\n    		display: inline-block;\n    		font-style: italic;\n    		font-size: 12px;\n    		width: 80%\n    	}\n    	.config[_ngcontent-%COMP%] {\n    		display: inline-block;\n    		text-align: right;\n    		font-size: 12px;\n    		width: 19%;\n    	}'];
var renderType_MessageComponent = null;
var _View_MessageComponent0 = (function (_super) {
    __extends(_View_MessageComponent0, _super);
    function _View_MessageComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessageComponent0, renderType_MessageComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessageComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'article', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'panel panel-default');
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'panel-body');
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'footer', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'panel-footer');
        this._text_6 = this.renderer.createText(this._el_5, '\n		', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'div', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'author');
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n		', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_10 = new import2.AppElement(10, 5, this, this._anchor_10);
        this._TemplateRef_10_5 = new import12.TemplateRef_(this._appEl_10, viewFactory_MessageComponent1);
        this._NgIf_10_6 = new import11.NgIf(this._appEl_10.vcRef, this._TemplateRef_10_5);
        this._text_11 = this.renderer.createText(this._el_5, '\n	', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12,
            this._text_13
        ], [], []);
        return null;
    };
    _View_MessageComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import11.NgIf) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6;
        }
        return notFoundResult;
    };
    _View_MessageComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this.context.belongsToUser();
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgIf_10_6.ngIf = currVal_2;
            this._expr_2 = currVal_2;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '\n		', this.context.message.content, '\n	');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '\n			', this.context.message.username, '\n		');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_8, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MessageComponent0;
}(import1.AppView));
export function viewFactory_MessageComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MessageComponent === null)) {
        (renderType_MessageComponent = viewUtils.createRenderComponentType('C:/Projects/UdemyAngularApp/assets/app/messages/message.component.html', 0, import9.ViewEncapsulation.Emulated, styles_MessageComponent, {}));
    }
    return new _View_MessageComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_MessageComponent1 = (function (_super) {
    __extends(_View_MessageComponent1, _super);
    function _View_MessageComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessageComponent1, renderType_MessageComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessageComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'config');
        this._text_1 = this.renderer.createText(this._el_0, '\n			', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'a', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Edit', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n			', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'a', null);
        this._text_6 = this.renderer.createText(this._el_5, 'Delete', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n		', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_5, 'click', this.eventHandler(this._handle_click_5_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_MessageComponent1.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.onEdit() !== false);
        return (true && pd_0);
    };
    _View_MessageComponent1.prototype._handle_click_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.onDelete() !== false);
        return (true && pd_0);
    };
    return _View_MessageComponent1;
}(import1.AppView));
function viewFactory_MessageComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_MessageComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=message.component.ngfactory.js.map