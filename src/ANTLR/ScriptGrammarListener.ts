// Generated from ./ScriptGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CalenderExprContext } from "./ScriptGrammarParser";
import { ClockExprContext } from "./ScriptGrammarParser";
import { UnaryMinusExprContext } from "./ScriptGrammarParser";
import { NotExprContext } from "./ScriptGrammarParser";
import { ArithmeticFirstPrecedenceExprContext } from "./ScriptGrammarParser";
import { ArithmeticSecondPrecedenceExprContext } from "./ScriptGrammarParser";
import { RelationalExprContext } from "./ScriptGrammarParser";
import { BooleanExprContext } from "./ScriptGrammarParser";
import { AtomExprContext } from "./ScriptGrammarParser";
import { CalClockExprContext } from "./ScriptGrammarParser";
import { StandAloneStatementsContext } from "./ScriptGrammarParser";
import { DbParamInitializationContext } from "./ScriptGrammarParser";
import { CriteriaInitializationContext } from "./ScriptGrammarParser";
import { AssignSingleVarContext } from "./ScriptGrammarParser";
import { AssignSingleBracketVarContext } from "./ScriptGrammarParser";
import { AssignMultiDotVarContext } from "./ScriptGrammarParser";
import { Recursive_exprContext } from "./ScriptGrammarParser";
import { MapInitialisationContext } from "./ScriptGrammarParser";
import { ParanthesisExprContext } from "./ScriptGrammarParser";
import { NumberAtomContext } from "./ScriptGrammarParser";
import { BooleanAtomContext } from "./ScriptGrammarParser";
import { StringAtomContext } from "./ScriptGrammarParser";
import { NullAtomContext } from "./ScriptGrammarParser";
import { VarAtomContext } from "./ScriptGrammarParser";
import { NewKeywordIntitializationContext } from "./ScriptGrammarParser";
import { CustomModuleInitializationContext } from "./ScriptGrammarParser";
import { ReadingInitializationContext } from "./ScriptGrammarParser";
import { ModuleAndSystemNameSpaceInitializationContext } from "./ScriptGrammarParser";
import { ListOppContext } from "./ScriptGrammarParser";
import { MapOppsContext } from "./ScriptGrammarParser";
import { ExprForBooleanContext } from "./ScriptGrammarParser";
import { BooleanExprCalculationContext } from "./ScriptGrammarParser";
import { BoolExprParanthesisContext } from "./ScriptGrammarParser";
import { ListInitialisationContext } from "./ScriptGrammarParser";
import { ListInitialisationWithElementsContext } from "./ScriptGrammarParser";
import { StartContext } from "./ScriptGrammarParser";
import { Function_blockContext } from "./ScriptGrammarParser";
import { Function_name_declareContext } from "./ScriptGrammarParser";
import { Function_paramContext } from "./ScriptGrammarParser";
import { BlockContext } from "./ScriptGrammarParser";
import { Try_catchContext } from "./ScriptGrammarParser";
import { Try_statementContext } from "./ScriptGrammarParser";
import { Catch_statementContext } from "./ScriptGrammarParser";
import { StatementContext } from "./ScriptGrammarParser";
import { AssignmentContext } from "./ScriptGrammarParser";
import { Assignment_varContext } from "./ScriptGrammarParser";
import { If_statementContext } from "./ScriptGrammarParser";
import { Condition_blockContext } from "./ScriptGrammarParser";
import { Statement_blockContext } from "./ScriptGrammarParser";
import { For_each_statementContext } from "./ScriptGrammarParser";
import { LogContext } from "./ScriptGrammarParser";
import { Function_returnContext } from "./ScriptGrammarParser";
import { Boolean_exprContext } from "./ScriptGrammarParser";
import { Boolean_expr_atomContext } from "./ScriptGrammarParser";
import { ExprContext } from "./ScriptGrammarParser";
import { Stand_alone_exprContext } from "./ScriptGrammarParser";
import { Calender_clock_exprContext } from "./ScriptGrammarParser";
import { Calender_varContext } from "./ScriptGrammarParser";
import { Clock_varContext } from "./ScriptGrammarParser";
import { Recursive_expressionContext } from "./ScriptGrammarParser";
import { AtomContext } from "./ScriptGrammarParser";
import { List_opperationsContext } from "./ScriptGrammarParser";
import { Map_opperationsContext } from "./ScriptGrammarParser";
import { Db_paramContext } from "./ScriptGrammarParser";
import { Db_param_groupContext } from "./ScriptGrammarParser";
import { Db_param_criteriaContext } from "./ScriptGrammarParser";
import { Db_param_field_criteriaContext } from "./ScriptGrammarParser";
import { Db_param_fieldContext } from "./ScriptGrammarParser";
import { Db_param_aggrContext } from "./ScriptGrammarParser";
import { Db_param_limitContext } from "./ScriptGrammarParser";
import { Db_param_rangeContext } from "./ScriptGrammarParser";
import { Db_param_group_byContext } from "./ScriptGrammarParser";
import { Db_param_sortContext } from "./ScriptGrammarParser";
import { CriteriaContext } from "./ScriptGrammarParser";
import { ConditionContext } from "./ScriptGrammarParser";
import { Condition_atomContext } from "./ScriptGrammarParser";
import { Data_typeContext } from "./ScriptGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ScriptGrammarParser`.
 */
export interface ScriptGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `calenderExpr`
	 * labeled alternative in `ScriptGrammarParser.calender_clock_expr`.
	 * @param ctx the parse tree
	 */
	enterCalenderExpr?: (ctx: CalenderExprContext) => void;
	/**
	 * Exit a parse tree produced by the `calenderExpr`
	 * labeled alternative in `ScriptGrammarParser.calender_clock_expr`.
	 * @param ctx the parse tree
	 */
	exitCalenderExpr?: (ctx: CalenderExprContext) => void;

	/**
	 * Enter a parse tree produced by the `clockExpr`
	 * labeled alternative in `ScriptGrammarParser.calender_clock_expr`.
	 * @param ctx the parse tree
	 */
	enterClockExpr?: (ctx: ClockExprContext) => void;
	/**
	 * Exit a parse tree produced by the `clockExpr`
	 * labeled alternative in `ScriptGrammarParser.calender_clock_expr`.
	 * @param ctx the parse tree
	 */
	exitClockExpr?: (ctx: ClockExprContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryMinusExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryMinusExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;

	/**
	 * Enter a parse tree produced by the `notExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNotExpr?: (ctx: NotExprContext) => void;
	/**
	 * Exit a parse tree produced by the `notExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNotExpr?: (ctx: NotExprContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticFirstPrecedenceExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterArithmeticFirstPrecedenceExpr?: (ctx: ArithmeticFirstPrecedenceExprContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticFirstPrecedenceExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitArithmeticFirstPrecedenceExpr?: (ctx: ArithmeticFirstPrecedenceExprContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticSecondPrecedenceExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterArithmeticSecondPrecedenceExpr?: (ctx: ArithmeticSecondPrecedenceExprContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticSecondPrecedenceExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitArithmeticSecondPrecedenceExpr?: (ctx: ArithmeticSecondPrecedenceExprContext) => void;

	/**
	 * Enter a parse tree produced by the `relationalExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpr?: (ctx: RelationalExprContext) => void;
	/**
	 * Exit a parse tree produced by the `relationalExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpr?: (ctx: RelationalExprContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpr?: (ctx: BooleanExprContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpr?: (ctx: BooleanExprContext) => void;

	/**
	 * Enter a parse tree produced by the `atomExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAtomExpr?: (ctx: AtomExprContext) => void;
	/**
	 * Exit a parse tree produced by the `atomExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAtomExpr?: (ctx: AtomExprContext) => void;

	/**
	 * Enter a parse tree produced by the `calClockExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCalClockExpr?: (ctx: CalClockExprContext) => void;
	/**
	 * Exit a parse tree produced by the `calClockExpr`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCalClockExpr?: (ctx: CalClockExprContext) => void;

	/**
	 * Enter a parse tree produced by the `standAloneStatements`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterStandAloneStatements?: (ctx: StandAloneStatementsContext) => void;
	/**
	 * Exit a parse tree produced by the `standAloneStatements`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitStandAloneStatements?: (ctx: StandAloneStatementsContext) => void;

	/**
	 * Enter a parse tree produced by the `dbParamInitialization`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDbParamInitialization?: (ctx: DbParamInitializationContext) => void;
	/**
	 * Exit a parse tree produced by the `dbParamInitialization`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDbParamInitialization?: (ctx: DbParamInitializationContext) => void;

	/**
	 * Enter a parse tree produced by the `criteriaInitialization`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCriteriaInitialization?: (ctx: CriteriaInitializationContext) => void;
	/**
	 * Exit a parse tree produced by the `criteriaInitialization`
	 * labeled alternative in `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCriteriaInitialization?: (ctx: CriteriaInitializationContext) => void;

	/**
	 * Enter a parse tree produced by the `assignSingleVar`
	 * labeled alternative in `ScriptGrammarParser.assignment_var`.
	 * @param ctx the parse tree
	 */
	enterAssignSingleVar?: (ctx: AssignSingleVarContext) => void;
	/**
	 * Exit a parse tree produced by the `assignSingleVar`
	 * labeled alternative in `ScriptGrammarParser.assignment_var`.
	 * @param ctx the parse tree
	 */
	exitAssignSingleVar?: (ctx: AssignSingleVarContext) => void;

	/**
	 * Enter a parse tree produced by the `assignSingleBracketVar`
	 * labeled alternative in `ScriptGrammarParser.assignment_var`.
	 * @param ctx the parse tree
	 */
	enterAssignSingleBracketVar?: (ctx: AssignSingleBracketVarContext) => void;
	/**
	 * Exit a parse tree produced by the `assignSingleBracketVar`
	 * labeled alternative in `ScriptGrammarParser.assignment_var`.
	 * @param ctx the parse tree
	 */
	exitAssignSingleBracketVar?: (ctx: AssignSingleBracketVarContext) => void;

	/**
	 * Enter a parse tree produced by the `assignMultiDotVar`
	 * labeled alternative in `ScriptGrammarParser.assignment_var`.
	 * @param ctx the parse tree
	 */
	enterAssignMultiDotVar?: (ctx: AssignMultiDotVarContext) => void;
	/**
	 * Exit a parse tree produced by the `assignMultiDotVar`
	 * labeled alternative in `ScriptGrammarParser.assignment_var`.
	 * @param ctx the parse tree
	 */
	exitAssignMultiDotVar?: (ctx: AssignMultiDotVarContext) => void;

	/**
	 * Enter a parse tree produced by the `recursive_expr`
	 * labeled alternative in `ScriptGrammarParser.stand_alone_expr`.
	 * @param ctx the parse tree
	 */
	enterRecursive_expr?: (ctx: Recursive_exprContext) => void;
	/**
	 * Exit a parse tree produced by the `recursive_expr`
	 * labeled alternative in `ScriptGrammarParser.stand_alone_expr`.
	 * @param ctx the parse tree
	 */
	exitRecursive_expr?: (ctx: Recursive_exprContext) => void;

	/**
	 * Enter a parse tree produced by the `mapInitialisation`
	 * labeled alternative in `ScriptGrammarParser.map_opperations`.
	 * @param ctx the parse tree
	 */
	enterMapInitialisation?: (ctx: MapInitialisationContext) => void;
	/**
	 * Exit a parse tree produced by the `mapInitialisation`
	 * labeled alternative in `ScriptGrammarParser.map_opperations`.
	 * @param ctx the parse tree
	 */
	exitMapInitialisation?: (ctx: MapInitialisationContext) => void;

	/**
	 * Enter a parse tree produced by the `paranthesisExpr`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterParanthesisExpr?: (ctx: ParanthesisExprContext) => void;
	/**
	 * Exit a parse tree produced by the `paranthesisExpr`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitParanthesisExpr?: (ctx: ParanthesisExprContext) => void;

	/**
	 * Enter a parse tree produced by the `numberAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterNumberAtom?: (ctx: NumberAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `numberAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitNumberAtom?: (ctx: NumberAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterBooleanAtom?: (ctx: BooleanAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitBooleanAtom?: (ctx: BooleanAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `stringAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterStringAtom?: (ctx: StringAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `stringAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitStringAtom?: (ctx: StringAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `nullAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterNullAtom?: (ctx: NullAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `nullAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitNullAtom?: (ctx: NullAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `varAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterVarAtom?: (ctx: VarAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `varAtom`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitVarAtom?: (ctx: VarAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `newKeywordIntitialization`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterNewKeywordIntitialization?: (ctx: NewKeywordIntitializationContext) => void;
	/**
	 * Exit a parse tree produced by the `newKeywordIntitialization`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitNewKeywordIntitialization?: (ctx: NewKeywordIntitializationContext) => void;

	/**
	 * Enter a parse tree produced by the `customModuleInitialization`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterCustomModuleInitialization?: (ctx: CustomModuleInitializationContext) => void;
	/**
	 * Exit a parse tree produced by the `customModuleInitialization`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitCustomModuleInitialization?: (ctx: CustomModuleInitializationContext) => void;

	/**
	 * Enter a parse tree produced by the `readingInitialization`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterReadingInitialization?: (ctx: ReadingInitializationContext) => void;
	/**
	 * Exit a parse tree produced by the `readingInitialization`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitReadingInitialization?: (ctx: ReadingInitializationContext) => void;

	/**
	 * Enter a parse tree produced by the `moduleAndSystemNameSpaceInitialization`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterModuleAndSystemNameSpaceInitialization?: (ctx: ModuleAndSystemNameSpaceInitializationContext) => void;
	/**
	 * Exit a parse tree produced by the `moduleAndSystemNameSpaceInitialization`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitModuleAndSystemNameSpaceInitialization?: (ctx: ModuleAndSystemNameSpaceInitializationContext) => void;

	/**
	 * Enter a parse tree produced by the `listOpp`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterListOpp?: (ctx: ListOppContext) => void;
	/**
	 * Exit a parse tree produced by the `listOpp`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitListOpp?: (ctx: ListOppContext) => void;

	/**
	 * Enter a parse tree produced by the `mapOpps`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterMapOpps?: (ctx: MapOppsContext) => void;
	/**
	 * Exit a parse tree produced by the `mapOpps`
	 * labeled alternative in `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitMapOpps?: (ctx: MapOppsContext) => void;

	/**
	 * Enter a parse tree produced by the `exprForBoolean`
	 * labeled alternative in `ScriptGrammarParser.boolean_expr_atom`.
	 * @param ctx the parse tree
	 */
	enterExprForBoolean?: (ctx: ExprForBooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `exprForBoolean`
	 * labeled alternative in `ScriptGrammarParser.boolean_expr_atom`.
	 * @param ctx the parse tree
	 */
	exitExprForBoolean?: (ctx: ExprForBooleanContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanExprCalculation`
	 * labeled alternative in `ScriptGrammarParser.boolean_expr_atom`.
	 * @param ctx the parse tree
	 */
	enterBooleanExprCalculation?: (ctx: BooleanExprCalculationContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanExprCalculation`
	 * labeled alternative in `ScriptGrammarParser.boolean_expr_atom`.
	 * @param ctx the parse tree
	 */
	exitBooleanExprCalculation?: (ctx: BooleanExprCalculationContext) => void;

	/**
	 * Enter a parse tree produced by the `boolExprParanthesis`
	 * labeled alternative in `ScriptGrammarParser.boolean_expr_atom`.
	 * @param ctx the parse tree
	 */
	enterBoolExprParanthesis?: (ctx: BoolExprParanthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `boolExprParanthesis`
	 * labeled alternative in `ScriptGrammarParser.boolean_expr_atom`.
	 * @param ctx the parse tree
	 */
	exitBoolExprParanthesis?: (ctx: BoolExprParanthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `listInitialisation`
	 * labeled alternative in `ScriptGrammarParser.list_opperations`.
	 * @param ctx the parse tree
	 */
	enterListInitialisation?: (ctx: ListInitialisationContext) => void;
	/**
	 * Exit a parse tree produced by the `listInitialisation`
	 * labeled alternative in `ScriptGrammarParser.list_opperations`.
	 * @param ctx the parse tree
	 */
	exitListInitialisation?: (ctx: ListInitialisationContext) => void;

	/**
	 * Enter a parse tree produced by the `listInitialisationWithElements`
	 * labeled alternative in `ScriptGrammarParser.list_opperations`.
	 * @param ctx the parse tree
	 */
	enterListInitialisationWithElements?: (ctx: ListInitialisationWithElementsContext) => void;
	/**
	 * Exit a parse tree produced by the `listInitialisationWithElements`
	 * labeled alternative in `ScriptGrammarParser.list_opperations`.
	 * @param ctx the parse tree
	 */
	exitListInitialisationWithElements?: (ctx: ListInitialisationWithElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.function_block`.
	 * @param ctx the parse tree
	 */
	enterFunction_block?: (ctx: Function_blockContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.function_block`.
	 * @param ctx the parse tree
	 */
	exitFunction_block?: (ctx: Function_blockContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.function_name_declare`.
	 * @param ctx the parse tree
	 */
	enterFunction_name_declare?: (ctx: Function_name_declareContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.function_name_declare`.
	 * @param ctx the parse tree
	 */
	exitFunction_name_declare?: (ctx: Function_name_declareContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.function_param`.
	 * @param ctx the parse tree
	 */
	enterFunction_param?: (ctx: Function_paramContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.function_param`.
	 * @param ctx the parse tree
	 */
	exitFunction_param?: (ctx: Function_paramContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.try_catch`.
	 * @param ctx the parse tree
	 */
	enterTry_catch?: (ctx: Try_catchContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.try_catch`.
	 * @param ctx the parse tree
	 */
	exitTry_catch?: (ctx: Try_catchContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.try_statement`.
	 * @param ctx the parse tree
	 */
	enterTry_statement?: (ctx: Try_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.try_statement`.
	 * @param ctx the parse tree
	 */
	exitTry_statement?: (ctx: Try_statementContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.catch_statement`.
	 * @param ctx the parse tree
	 */
	enterCatch_statement?: (ctx: Catch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.catch_statement`.
	 * @param ctx the parse tree
	 */
	exitCatch_statement?: (ctx: Catch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.assignment_var`.
	 * @param ctx the parse tree
	 */
	enterAssignment_var?: (ctx: Assignment_varContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.assignment_var`.
	 * @param ctx the parse tree
	 */
	exitAssignment_var?: (ctx: Assignment_varContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.condition_block`.
	 * @param ctx the parse tree
	 */
	enterCondition_block?: (ctx: Condition_blockContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.condition_block`.
	 * @param ctx the parse tree
	 */
	exitCondition_block?: (ctx: Condition_blockContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.statement_block`.
	 * @param ctx the parse tree
	 */
	enterStatement_block?: (ctx: Statement_blockContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.statement_block`.
	 * @param ctx the parse tree
	 */
	exitStatement_block?: (ctx: Statement_blockContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.for_each_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_each_statement?: (ctx: For_each_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.for_each_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_each_statement?: (ctx: For_each_statementContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.log`.
	 * @param ctx the parse tree
	 */
	enterLog?: (ctx: LogContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.log`.
	 * @param ctx the parse tree
	 */
	exitLog?: (ctx: LogContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.function_return`.
	 * @param ctx the parse tree
	 */
	enterFunction_return?: (ctx: Function_returnContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.function_return`.
	 * @param ctx the parse tree
	 */
	exitFunction_return?: (ctx: Function_returnContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.boolean_expr`.
	 * @param ctx the parse tree
	 */
	enterBoolean_expr?: (ctx: Boolean_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.boolean_expr`.
	 * @param ctx the parse tree
	 */
	exitBoolean_expr?: (ctx: Boolean_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.boolean_expr_atom`.
	 * @param ctx the parse tree
	 */
	enterBoolean_expr_atom?: (ctx: Boolean_expr_atomContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.boolean_expr_atom`.
	 * @param ctx the parse tree
	 */
	exitBoolean_expr_atom?: (ctx: Boolean_expr_atomContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.stand_alone_expr`.
	 * @param ctx the parse tree
	 */
	enterStand_alone_expr?: (ctx: Stand_alone_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.stand_alone_expr`.
	 * @param ctx the parse tree
	 */
	exitStand_alone_expr?: (ctx: Stand_alone_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.calender_clock_expr`.
	 * @param ctx the parse tree
	 */
	enterCalender_clock_expr?: (ctx: Calender_clock_exprContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.calender_clock_expr`.
	 * @param ctx the parse tree
	 */
	exitCalender_clock_expr?: (ctx: Calender_clock_exprContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.calender_var`.
	 * @param ctx the parse tree
	 */
	enterCalender_var?: (ctx: Calender_varContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.calender_var`.
	 * @param ctx the parse tree
	 */
	exitCalender_var?: (ctx: Calender_varContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.clock_var`.
	 * @param ctx the parse tree
	 */
	enterClock_var?: (ctx: Clock_varContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.clock_var`.
	 * @param ctx the parse tree
	 */
	exitClock_var?: (ctx: Clock_varContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.recursive_expression`.
	 * @param ctx the parse tree
	 */
	enterRecursive_expression?: (ctx: Recursive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.recursive_expression`.
	 * @param ctx the parse tree
	 */
	exitRecursive_expression?: (ctx: Recursive_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.list_opperations`.
	 * @param ctx the parse tree
	 */
	enterList_opperations?: (ctx: List_opperationsContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.list_opperations`.
	 * @param ctx the parse tree
	 */
	exitList_opperations?: (ctx: List_opperationsContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.map_opperations`.
	 * @param ctx the parse tree
	 */
	enterMap_opperations?: (ctx: Map_opperationsContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.map_opperations`.
	 * @param ctx the parse tree
	 */
	exitMap_opperations?: (ctx: Map_opperationsContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param`.
	 * @param ctx the parse tree
	 */
	enterDb_param?: (ctx: Db_paramContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param`.
	 * @param ctx the parse tree
	 */
	exitDb_param?: (ctx: Db_paramContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param_group`.
	 * @param ctx the parse tree
	 */
	enterDb_param_group?: (ctx: Db_param_groupContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param_group`.
	 * @param ctx the parse tree
	 */
	exitDb_param_group?: (ctx: Db_param_groupContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param_criteria`.
	 * @param ctx the parse tree
	 */
	enterDb_param_criteria?: (ctx: Db_param_criteriaContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param_criteria`.
	 * @param ctx the parse tree
	 */
	exitDb_param_criteria?: (ctx: Db_param_criteriaContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param_field_criteria`.
	 * @param ctx the parse tree
	 */
	enterDb_param_field_criteria?: (ctx: Db_param_field_criteriaContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param_field_criteria`.
	 * @param ctx the parse tree
	 */
	exitDb_param_field_criteria?: (ctx: Db_param_field_criteriaContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param_field`.
	 * @param ctx the parse tree
	 */
	enterDb_param_field?: (ctx: Db_param_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param_field`.
	 * @param ctx the parse tree
	 */
	exitDb_param_field?: (ctx: Db_param_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param_aggr`.
	 * @param ctx the parse tree
	 */
	enterDb_param_aggr?: (ctx: Db_param_aggrContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param_aggr`.
	 * @param ctx the parse tree
	 */
	exitDb_param_aggr?: (ctx: Db_param_aggrContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param_limit`.
	 * @param ctx the parse tree
	 */
	enterDb_param_limit?: (ctx: Db_param_limitContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param_limit`.
	 * @param ctx the parse tree
	 */
	exitDb_param_limit?: (ctx: Db_param_limitContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param_range`.
	 * @param ctx the parse tree
	 */
	enterDb_param_range?: (ctx: Db_param_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param_range`.
	 * @param ctx the parse tree
	 */
	exitDb_param_range?: (ctx: Db_param_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param_group_by`.
	 * @param ctx the parse tree
	 */
	enterDb_param_group_by?: (ctx: Db_param_group_byContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param_group_by`.
	 * @param ctx the parse tree
	 */
	exitDb_param_group_by?: (ctx: Db_param_group_byContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.db_param_sort`.
	 * @param ctx the parse tree
	 */
	enterDb_param_sort?: (ctx: Db_param_sortContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.db_param_sort`.
	 * @param ctx the parse tree
	 */
	exitDb_param_sort?: (ctx: Db_param_sortContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.criteria`.
	 * @param ctx the parse tree
	 */
	enterCriteria?: (ctx: CriteriaContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.criteria`.
	 * @param ctx the parse tree
	 */
	exitCriteria?: (ctx: CriteriaContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.condition_atom`.
	 * @param ctx the parse tree
	 */
	enterCondition_atom?: (ctx: Condition_atomContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.condition_atom`.
	 * @param ctx the parse tree
	 */
	exitCondition_atom?: (ctx: Condition_atomContext) => void;

	/**
	 * Enter a parse tree produced by `ScriptGrammarParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ScriptGrammarParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?: (ctx: Data_typeContext) => void;
}

