"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts = __importStar(require("typescript"));
// before TS 4.0
const statement = ts.createVariableStatement([], ts.createVariableDeclarationList([ts.createVariableDeclaration(ts.createIdentifier("testVar"), ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), ts.createStringLiteral("test"))], ts.NodeFlags.Const));
// starting from TS 4.0
const statement = ts.factory.createVariableStatement([], ts.factory.createVariableDeclarationList([ts.factory.createVariableDeclaration(ts.factory.createIdentifier("testVar"), undefined, ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), ts.factory.createStringLiteral("test"))], ts.NodeFlags.Const));
const printer = ts.createPrinter();
const result = printer.printNode(ts.EmitHint.Unspecified, statement, undefined);
console.log(result); // const testVar: string = "test";
