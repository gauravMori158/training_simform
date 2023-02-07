import * as ts from "typescript";

// before TS 4.0
const statement = ts.createVariableStatement(
    [],
    ts.createVariableDeclarationList(
        [ts.createVariableDeclaration(
            ts.createIdentifier("testVar"),
            ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
            ts.createStringLiteral("test")
        )],
        ts.NodeFlags.Const
    )
);

// starting from TS 4.0
const statement = ts.factory.createVariableStatement(
    [],
    ts.factory.createVariableDeclarationList(
        [ts.factory.createVariableDeclaration(
            ts.factory.createIdentifier("testVar"),
            undefined,
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
            ts.factory.createStringLiteral("test")
        )],
        ts.NodeFlags.Const
    )
);

const printer = ts.createPrinter();

const result = printer.printNode(
    ts.EmitHint.Unspecified,
    statement,
    undefined
);

console.log(result); // const testVar: string = "test";