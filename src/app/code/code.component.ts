import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/ext-language_tools';
const THEME = "ace/theme/solarized_light"; 
const LANG = 'ace/mode/html';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements AfterViewInit {

  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;

  constructor() { }

  ngAfterViewInit(){
    ace.require('ace/ext/language_tools');
    const element = this.codeEditorElmRef.nativeElement;
    const editorOptions = this.getEditorOptions();
    this.codeEditor = ace.edit(element, editorOptions);
    this.codeEditor.setTheme(THEME);
    this.codeEditor.getSession().setMode(LANG);
    this.codeEditor.setShowFoldWidgets(true);
  }

  private getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } {
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
        highlightActiveLine: true,
        minLines: 32,
        autoScrollEditorIntoView: true,
        maxLines: Infinity,
    };
    const extraEditorOptions = {
        enableBasicAutocompletion: true
    };
    const margedOptions = Object.assign(basicEditorOptions, extraEditorOptions);
    return margedOptions;
}
}
