// Generated from ./ScriptGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ScriptGrammarListener } from "./ScriptGrammarListener";

export class ScriptGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly VOID = 18;
	public static readonly DATA_TYPE_STRING = 19;
	public static readonly DATA_TYPE_NUMBER = 20;
	public static readonly DATA_TYPE_BOOLEAN = 21;
	public static readonly DATA_TYPE_MAP = 22;
	public static readonly DATA_TYPE_LIST = 23;
	public static readonly DATA_TYPE_CRITERIA = 24;
	public static readonly DATA_TYPE_OBJECT = 25;
	public static readonly RETURN = 26;
	public static readonly TRY = 27;
	public static readonly CATCH = 28;
	public static readonly OR = 29;
	public static readonly SINGLE_OR = 30;
	public static readonly DOT = 31;
	public static readonly AND = 32;
	public static readonly SINGLE_AND = 33;
	public static readonly EQ = 34;
	public static readonly NEQ = 35;
	public static readonly GT = 36;
	public static readonly LT = 37;
	public static readonly GTEQ = 38;
	public static readonly LTEQ = 39;
	public static readonly PLUS = 40;
	public static readonly MINUS = 41;
	public static readonly MULT = 42;
	public static readonly DIV = 43;
	public static readonly MOD = 44;
	public static readonly POW = 45;
	public static readonly NOT = 46;
	public static readonly COMMA = 47;
	public static readonly SEMICOLON = 48;
	public static readonly COLON = 49;
	public static readonly ASSIGN = 50;
	public static readonly OPEN_PARANTHESIS = 51;
	public static readonly CLOSE_PARANTHESIS = 52;
	public static readonly OPEN_BRACE = 53;
	public static readonly CLOSE_BRACE = 54;
	public static readonly OPEN_BRACKET = 55;
	public static readonly CLOSE_BRACKET = 56;
	public static readonly TRUE = 57;
	public static readonly FALSE = 58;
	public static readonly NULL = 59;
	public static readonly IF = 60;
	public static readonly ELSE = 61;
	public static readonly FOR_EACH = 62;
	public static readonly LOG = 63;
	public static readonly VAR = 64;
	public static readonly INT = 65;
	public static readonly FLOAT = 66;
	public static readonly STRING = 67;
	public static readonly COMMENT = 68;
	public static readonly BLOCKCOMMENT = 69;
	public static readonly SPACE = 70;
	public static readonly OTHER = 71;
	public static readonly RULE_start = 0;
	public static readonly RULE_function_block = 1;
	public static readonly RULE_function_name_declare = 2;
	public static readonly RULE_function_param = 3;
	public static readonly RULE_block = 4;
	public static readonly RULE_try_catch = 5;
	public static readonly RULE_try_statement = 6;
	public static readonly RULE_catch_statement = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_assignment = 9;
	public static readonly RULE_assignment_var = 10;
	public static readonly RULE_if_statement = 11;
	public static readonly RULE_condition_block = 12;
	public static readonly RULE_statement_block = 13;
	public static readonly RULE_for_each_statement = 14;
	public static readonly RULE_log = 15;
	public static readonly RULE_function_return = 16;
	public static readonly RULE_boolean_expr = 17;
	public static readonly RULE_boolean_expr_atom = 18;
	public static readonly RULE_expr = 19;
	public static readonly RULE_stand_alone_expr = 20;
	public static readonly RULE_calender_clock_expr = 21;
	public static readonly RULE_calender_var = 22;
	public static readonly RULE_clock_var = 23;
	public static readonly RULE_recursive_expression = 24;
	public static readonly RULE_atom = 25;
	public static readonly RULE_list_opperations = 26;
	public static readonly RULE_map_opperations = 27;
	public static readonly RULE_db_param = 28;
	public static readonly RULE_db_param_group = 29;
	public static readonly RULE_db_param_criteria = 30;
	public static readonly RULE_db_param_field_criteria = 31;
	public static readonly RULE_db_param_field = 32;
	public static readonly RULE_db_param_aggr = 33;
	public static readonly RULE_db_param_limit = 34;
	public static readonly RULE_db_param_range = 35;
	public static readonly RULE_db_param_group_by = 36;
	public static readonly RULE_db_param_sort = 37;
	public static readonly RULE_criteria = 38;
	public static readonly RULE_condition = 39;
	public static readonly RULE_condition_atom = 40;
	public static readonly RULE_data_type = 41;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "function_block", "function_name_declare", "function_param", 
		"block", "try_catch", "try_statement", "catch_statement", "statement", 
		"assignment", "assignment_var", "if_statement", "condition_block", "statement_block", 
		"for_each_statement", "log", "function_return", "boolean_expr", "boolean_expr_atom", 
		"expr", "stand_alone_expr", "calender_clock_expr", "calender_var", "clock_var", 
		"recursive_expression", "atom", "list_opperations", "map_opperations", 
		"db_param", "db_param_group", "db_param_criteria", "db_param_field_criteria", 
		"db_param_field", "db_param_aggr", "db_param_limit", "db_param_range", 
		"db_param_group_by", "db_param_sort", "criteria", "condition", "condition_atom", 
		"data_type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'in'", "'Calender.'", "'Clock.'", "'new '", "'Module'", "'Reading'", 
		"'criteria'", "'fieldCriteria'", "'field'", "'aggregation'", "'limit'", 
		"'range'", "'to'", "'groupBy'", "'orderBy'", "'asc'", "'desc'", "'void'", 
		"'String'", "'Number'", "'Boolean'", "'Map'", "'List'", "'Criteria'", 
		"'Object'", "'return'", "'try'", "'catch'", "'||'", "'|'", "'.'", "'&&'", 
		"'&'", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", "'+'", "'-'", "'*'", 
		"'/'", "'%'", "'^'", "'!'", "','", "';'", "':'", "'='", "'('", "')'", 
		"'{'", "'}'", "'['", "']'", "'true'", "'false'", "'null'", "'if'", "'else'", 
		"'for each'", "'log'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "VOID", "DATA_TYPE_STRING", 
		"DATA_TYPE_NUMBER", "DATA_TYPE_BOOLEAN", "DATA_TYPE_MAP", "DATA_TYPE_LIST", 
		"DATA_TYPE_CRITERIA", "DATA_TYPE_OBJECT", "RETURN", "TRY", "CATCH", "OR", 
		"SINGLE_OR", "DOT", "AND", "SINGLE_AND", "EQ", "NEQ", "GT", "LT", "GTEQ", 
		"LTEQ", "PLUS", "MINUS", "MULT", "DIV", "MOD", "POW", "NOT", "COMMA", 
		"SEMICOLON", "COLON", "ASSIGN", "OPEN_PARANTHESIS", "CLOSE_PARANTHESIS", 
		"OPEN_BRACE", "CLOSE_BRACE", "OPEN_BRACKET", "CLOSE_BRACKET", "TRUE", 
		"FALSE", "NULL", "IF", "ELSE", "FOR_EACH", "LOG", "VAR", "INT", "FLOAT", 
		"STRING", "COMMENT", "BLOCKCOMMENT", "SPACE", "OTHER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ScriptGrammarParser._LITERAL_NAMES, ScriptGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ScriptGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ScriptGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return ScriptGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ScriptGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ScriptGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ScriptGrammarParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.T__3) | (1 << ScriptGrammarParser.T__4) | (1 << ScriptGrammarParser.T__5) | (1 << ScriptGrammarParser.VOID) | (1 << ScriptGrammarParser.DATA_TYPE_STRING) | (1 << ScriptGrammarParser.DATA_TYPE_NUMBER) | (1 << ScriptGrammarParser.DATA_TYPE_BOOLEAN) | (1 << ScriptGrammarParser.DATA_TYPE_MAP) | (1 << ScriptGrammarParser.DATA_TYPE_LIST) | (1 << ScriptGrammarParser.DATA_TYPE_CRITERIA) | (1 << ScriptGrammarParser.DATA_TYPE_OBJECT) | (1 << ScriptGrammarParser.RETURN) | (1 << ScriptGrammarParser.TRY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ScriptGrammarParser.OPEN_PARANTHESIS - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACE - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACKET - 51)) | (1 << (ScriptGrammarParser.TRUE - 51)) | (1 << (ScriptGrammarParser.FALSE - 51)) | (1 << (ScriptGrammarParser.NULL - 51)) | (1 << (ScriptGrammarParser.IF - 51)) | (1 << (ScriptGrammarParser.FOR_EACH - 51)) | (1 << (ScriptGrammarParser.LOG - 51)) | (1 << (ScriptGrammarParser.VAR - 51)) | (1 << (ScriptGrammarParser.INT - 51)) | (1 << (ScriptGrammarParser.FLOAT - 51)) | (1 << (ScriptGrammarParser.STRING - 51)) | (1 << (ScriptGrammarParser.OTHER - 51)))) !== 0)) {
				{
				{
				this.state = 84;
				this.statement();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 90;
			this.match(ScriptGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_block(): Function_blockContext {
		let _localctx: Function_blockContext = new Function_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ScriptGrammarParser.RULE_function_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.data_type();
			this.state = 93;
			this.function_name_declare();
			this.state = 94;
			this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.VOID) | (1 << ScriptGrammarParser.DATA_TYPE_STRING) | (1 << ScriptGrammarParser.DATA_TYPE_NUMBER) | (1 << ScriptGrammarParser.DATA_TYPE_BOOLEAN) | (1 << ScriptGrammarParser.DATA_TYPE_MAP) | (1 << ScriptGrammarParser.DATA_TYPE_LIST) | (1 << ScriptGrammarParser.DATA_TYPE_CRITERIA) | (1 << ScriptGrammarParser.DATA_TYPE_OBJECT))) !== 0)) {
				{
				{
				this.state = 95;
				this.function_param();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 101;
				this.match(ScriptGrammarParser.COMMA);
				this.state = 102;
				this.function_param();
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 108;
			this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
			this.state = 109;
			this.match(ScriptGrammarParser.OPEN_BRACE);
			this.state = 110;
			this.block();
			this.state = 111;
			this.match(ScriptGrammarParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_name_declare(): Function_name_declareContext {
		let _localctx: Function_name_declareContext = new Function_name_declareContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ScriptGrammarParser.RULE_function_name_declare);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(ScriptGrammarParser.VAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_param(): Function_paramContext {
		let _localctx: Function_paramContext = new Function_paramContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ScriptGrammarParser.RULE_function_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.data_type();
			this.state = 116;
			this.match(ScriptGrammarParser.VAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ScriptGrammarParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.T__3) | (1 << ScriptGrammarParser.T__4) | (1 << ScriptGrammarParser.T__5) | (1 << ScriptGrammarParser.VOID) | (1 << ScriptGrammarParser.DATA_TYPE_STRING) | (1 << ScriptGrammarParser.DATA_TYPE_NUMBER) | (1 << ScriptGrammarParser.DATA_TYPE_BOOLEAN) | (1 << ScriptGrammarParser.DATA_TYPE_MAP) | (1 << ScriptGrammarParser.DATA_TYPE_LIST) | (1 << ScriptGrammarParser.DATA_TYPE_CRITERIA) | (1 << ScriptGrammarParser.DATA_TYPE_OBJECT) | (1 << ScriptGrammarParser.RETURN) | (1 << ScriptGrammarParser.TRY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ScriptGrammarParser.OPEN_PARANTHESIS - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACE - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACKET - 51)) | (1 << (ScriptGrammarParser.TRUE - 51)) | (1 << (ScriptGrammarParser.FALSE - 51)) | (1 << (ScriptGrammarParser.NULL - 51)) | (1 << (ScriptGrammarParser.IF - 51)) | (1 << (ScriptGrammarParser.FOR_EACH - 51)) | (1 << (ScriptGrammarParser.LOG - 51)) | (1 << (ScriptGrammarParser.VAR - 51)) | (1 << (ScriptGrammarParser.INT - 51)) | (1 << (ScriptGrammarParser.FLOAT - 51)) | (1 << (ScriptGrammarParser.STRING - 51)) | (1 << (ScriptGrammarParser.OTHER - 51)))) !== 0)) {
				{
				{
				this.state = 118;
				this.statement();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public try_catch(): Try_catchContext {
		let _localctx: Try_catchContext = new Try_catchContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ScriptGrammarParser.RULE_try_catch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(ScriptGrammarParser.TRY);
			this.state = 125;
			this.match(ScriptGrammarParser.OPEN_BRACE);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.T__3) | (1 << ScriptGrammarParser.T__4) | (1 << ScriptGrammarParser.T__5) | (1 << ScriptGrammarParser.VOID) | (1 << ScriptGrammarParser.DATA_TYPE_STRING) | (1 << ScriptGrammarParser.DATA_TYPE_NUMBER) | (1 << ScriptGrammarParser.DATA_TYPE_BOOLEAN) | (1 << ScriptGrammarParser.DATA_TYPE_MAP) | (1 << ScriptGrammarParser.DATA_TYPE_LIST) | (1 << ScriptGrammarParser.DATA_TYPE_CRITERIA) | (1 << ScriptGrammarParser.DATA_TYPE_OBJECT) | (1 << ScriptGrammarParser.RETURN) | (1 << ScriptGrammarParser.TRY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ScriptGrammarParser.OPEN_PARANTHESIS - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACE - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACKET - 51)) | (1 << (ScriptGrammarParser.TRUE - 51)) | (1 << (ScriptGrammarParser.FALSE - 51)) | (1 << (ScriptGrammarParser.NULL - 51)) | (1 << (ScriptGrammarParser.IF - 51)) | (1 << (ScriptGrammarParser.FOR_EACH - 51)) | (1 << (ScriptGrammarParser.LOG - 51)) | (1 << (ScriptGrammarParser.VAR - 51)) | (1 << (ScriptGrammarParser.INT - 51)) | (1 << (ScriptGrammarParser.FLOAT - 51)) | (1 << (ScriptGrammarParser.STRING - 51)) | (1 << (ScriptGrammarParser.OTHER - 51)))) !== 0)) {
				{
				{
				this.state = 126;
				this.try_statement();
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 132;
			this.match(ScriptGrammarParser.CLOSE_BRACE);
			this.state = 133;
			this.match(ScriptGrammarParser.CATCH);
			this.state = 134;
			this.match(ScriptGrammarParser.OPEN_BRACE);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.T__3) | (1 << ScriptGrammarParser.T__4) | (1 << ScriptGrammarParser.T__5) | (1 << ScriptGrammarParser.VOID) | (1 << ScriptGrammarParser.DATA_TYPE_STRING) | (1 << ScriptGrammarParser.DATA_TYPE_NUMBER) | (1 << ScriptGrammarParser.DATA_TYPE_BOOLEAN) | (1 << ScriptGrammarParser.DATA_TYPE_MAP) | (1 << ScriptGrammarParser.DATA_TYPE_LIST) | (1 << ScriptGrammarParser.DATA_TYPE_CRITERIA) | (1 << ScriptGrammarParser.DATA_TYPE_OBJECT) | (1 << ScriptGrammarParser.RETURN) | (1 << ScriptGrammarParser.TRY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ScriptGrammarParser.OPEN_PARANTHESIS - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACE - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACKET - 51)) | (1 << (ScriptGrammarParser.TRUE - 51)) | (1 << (ScriptGrammarParser.FALSE - 51)) | (1 << (ScriptGrammarParser.NULL - 51)) | (1 << (ScriptGrammarParser.IF - 51)) | (1 << (ScriptGrammarParser.FOR_EACH - 51)) | (1 << (ScriptGrammarParser.LOG - 51)) | (1 << (ScriptGrammarParser.VAR - 51)) | (1 << (ScriptGrammarParser.INT - 51)) | (1 << (ScriptGrammarParser.FLOAT - 51)) | (1 << (ScriptGrammarParser.STRING - 51)) | (1 << (ScriptGrammarParser.OTHER - 51)))) !== 0)) {
				{
				{
				this.state = 135;
				this.catch_statement();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 141;
			this.match(ScriptGrammarParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public try_statement(): Try_statementContext {
		let _localctx: Try_statementContext = new Try_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ScriptGrammarParser.RULE_try_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catch_statement(): Catch_statementContext {
		let _localctx: Catch_statementContext = new Catch_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ScriptGrammarParser.RULE_catch_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ScriptGrammarParser.RULE_statement);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 147;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 148;
				this.if_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 149;
				this.for_each_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 150;
				this.log();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 151;
				this.stand_alone_expr();
				this.state = 152;
				this.match(ScriptGrammarParser.SEMICOLON);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 154;
				this.function_return();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 155;
				this.try_catch();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 156;
				this.function_block();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 157;
				_localctx._OTHER = this.match(ScriptGrammarParser.OTHER);
				// System.err.println("unknown char: " + (_localctx._OTHER != null ? _localctx._OTHER.text : undefined));
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ScriptGrammarParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.assignment_var();
			this.state = 162;
			this.match(ScriptGrammarParser.ASSIGN);
			this.state = 163;
			this.expr(0);
			this.state = 164;
			this.match(ScriptGrammarParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_var(): Assignment_varContext {
		let _localctx: Assignment_varContext = new Assignment_varContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ScriptGrammarParser.RULE_assignment_var);
		let _la: number;
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				_localctx = new AssignSingleVarContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.match(ScriptGrammarParser.VAR);
				}
				break;

			case 2:
				_localctx = new AssignSingleBracketVarContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.match(ScriptGrammarParser.VAR);
				{
				this.state = 168;
				this.match(ScriptGrammarParser.OPEN_BRACKET);
				this.state = 169;
				this.expr(0);
				this.state = 170;
				this.match(ScriptGrammarParser.CLOSE_BRACKET);
				}
				}
				break;

			case 3:
				_localctx = new AssignMultiDotVarContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 172;
				this.match(ScriptGrammarParser.VAR);
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 173;
					this.match(ScriptGrammarParser.DOT);
					this.state = 174;
					this.match(ScriptGrammarParser.VAR);
					}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ScriptGrammarParser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_statement(): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ScriptGrammarParser.RULE_if_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(ScriptGrammarParser.IF);
			this.state = 182;
			this.condition_block();
			this.state = 188;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 183;
					this.match(ScriptGrammarParser.ELSE);
					this.state = 184;
					this.match(ScriptGrammarParser.IF);
					this.state = 185;
					this.condition_block();
					}
					}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 191;
				this.match(ScriptGrammarParser.ELSE);
				this.state = 192;
				this.statement_block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition_block(): Condition_blockContext {
		let _localctx: Condition_blockContext = new Condition_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ScriptGrammarParser.RULE_condition_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.boolean_expr();
			this.state = 196;
			this.statement_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement_block(): Statement_blockContext {
		let _localctx: Statement_blockContext = new Statement_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ScriptGrammarParser.RULE_statement_block);
		try {
			this.state = 203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.match(ScriptGrammarParser.OPEN_BRACE);
				this.state = 199;
				this.block();
				this.state = 200;
				this.match(ScriptGrammarParser.CLOSE_BRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_each_statement(): For_each_statementContext {
		let _localctx: For_each_statementContext = new For_each_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ScriptGrammarParser.RULE_for_each_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(ScriptGrammarParser.FOR_EACH);
			this.state = 206;
			this.match(ScriptGrammarParser.VAR);
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 207;
				this.match(ScriptGrammarParser.COMMA);
				this.state = 208;
				this.match(ScriptGrammarParser.VAR);
				}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 214;
			this.match(ScriptGrammarParser.T__0);
			this.state = 215;
			this.expr(0);
			this.state = 216;
			this.statement_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public log(): LogContext {
		let _localctx: LogContext = new LogContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ScriptGrammarParser.RULE_log);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(ScriptGrammarParser.LOG);
			this.state = 219;
			this.expr(0);
			this.state = 220;
			this.match(ScriptGrammarParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_return(): Function_returnContext {
		let _localctx: Function_returnContext = new Function_returnContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ScriptGrammarParser.RULE_function_return);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(ScriptGrammarParser.RETURN);
			this.state = 223;
			this.expr(0);
			this.state = 224;
			this.match(ScriptGrammarParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolean_expr(): Boolean_exprContext {
		let _localctx: Boolean_exprContext = new Boolean_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ScriptGrammarParser.RULE_boolean_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
			this.state = 227;
			this.boolean_expr_atom(0);
			this.state = 228;
			this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public boolean_expr_atom(): Boolean_expr_atomContext;
	public boolean_expr_atom(_p: number): Boolean_expr_atomContext;
	// @RuleVersion(0)
	public boolean_expr_atom(_p?: number): Boolean_expr_atomContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Boolean_expr_atomContext = new Boolean_expr_atomContext(this._ctx, _parentState);
		let _prevctx: Boolean_expr_atomContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, ScriptGrammarParser.RULE_boolean_expr_atom, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				_localctx = new ExprForBooleanContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 231;
				this.expr(0);
				}
				break;

			case 2:
				{
				_localctx = new BoolExprParanthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 232;
				this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
				this.state = 233;
				this.boolean_expr_atom(0);
				this.state = 234;
				this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 243;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BooleanExprCalculationContext(new Boolean_expr_atomContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, ScriptGrammarParser.RULE_boolean_expr_atom);
					this.state = 238;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 239;
					(_localctx as BooleanExprCalculationContext)._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === ScriptGrammarParser.OR || _la === ScriptGrammarParser.AND)) {
						(_localctx as BooleanExprCalculationContext)._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 240;
					this.boolean_expr_atom(3);
					}
					}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 38;
		this.enterRecursionRule(_localctx, 38, ScriptGrammarParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryMinusExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 247;
				this.match(ScriptGrammarParser.MINUS);
				this.state = 248;
				this.expr(11);
				}
				break;

			case 2:
				{
				_localctx = new NotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 249;
				this.match(ScriptGrammarParser.NOT);
				this.state = 250;
				this.expr(10);
				}
				break;

			case 3:
				{
				_localctx = new AtomExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 251;
				this.atom();
				}
				break;

			case 4:
				{
				_localctx = new CalClockExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 252;
				this.calender_clock_expr();
				}
				break;

			case 5:
				{
				_localctx = new StandAloneStatementsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 253;
				this.stand_alone_expr();
				}
				break;

			case 6:
				{
				_localctx = new DbParamInitializationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 254;
				this.db_param();
				}
				break;

			case 7:
				{
				_localctx = new CriteriaInitializationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 255;
				this.criteria();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 272;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 270;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticFirstPrecedenceExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ScriptGrammarParser.RULE_expr);
						this.state = 258;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 259;
						(_localctx as ArithmeticFirstPrecedenceExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (ScriptGrammarParser.MULT - 42)) | (1 << (ScriptGrammarParser.DIV - 42)) | (1 << (ScriptGrammarParser.MOD - 42)))) !== 0))) {
							(_localctx as ArithmeticFirstPrecedenceExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 260;
						this.expr(10);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticSecondPrecedenceExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ScriptGrammarParser.RULE_expr);
						this.state = 261;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 262;
						(_localctx as ArithmeticSecondPrecedenceExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ScriptGrammarParser.PLUS || _la === ScriptGrammarParser.MINUS)) {
							(_localctx as ArithmeticSecondPrecedenceExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 263;
						this.expr(9);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ScriptGrammarParser.RULE_expr);
						this.state = 264;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 265;
						(_localctx as RelationalExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ScriptGrammarParser.EQ - 34)) | (1 << (ScriptGrammarParser.NEQ - 34)) | (1 << (ScriptGrammarParser.GT - 34)) | (1 << (ScriptGrammarParser.LT - 34)) | (1 << (ScriptGrammarParser.GTEQ - 34)) | (1 << (ScriptGrammarParser.LTEQ - 34)))) !== 0))) {
							(_localctx as RelationalExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 266;
						this.expr(8);
						}
						break;

					case 4:
						{
						_localctx = new BooleanExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ScriptGrammarParser.RULE_expr);
						this.state = 267;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 268;
						(_localctx as BooleanExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ScriptGrammarParser.SINGLE_OR || _la === ScriptGrammarParser.SINGLE_AND)) {
							(_localctx as BooleanExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 269;
						this.expr(7);
						}
						break;
					}
					}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stand_alone_expr(): Stand_alone_exprContext {
		let _localctx: Stand_alone_exprContext = new Stand_alone_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ScriptGrammarParser.RULE_stand_alone_expr);
		try {
			let _alt: number;
			_localctx = new Recursive_exprContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.atom();
			this.state = 277;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 276;
					this.recursive_expression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 279;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calender_clock_expr(): Calender_clock_exprContext {
		let _localctx: Calender_clock_exprContext = new Calender_clock_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ScriptGrammarParser.RULE_calender_clock_expr);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ScriptGrammarParser.T__1:
				_localctx = new CalenderExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 281;
				this.match(ScriptGrammarParser.T__1);
				this.state = 282;
				this.calender_var();
				}
				break;
			case ScriptGrammarParser.T__2:
				_localctx = new ClockExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 283;
				this.match(ScriptGrammarParser.T__2);
				this.state = 284;
				this.clock_var();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calender_var(): Calender_varContext {
		let _localctx: Calender_varContext = new Calender_varContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ScriptGrammarParser.RULE_calender_var);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			_la = this._input.LA(1);
			if (!(_la === ScriptGrammarParser.VAR || _la === ScriptGrammarParser.INT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clock_var(): Clock_varContext {
		let _localctx: Clock_varContext = new Clock_varContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ScriptGrammarParser.RULE_clock_var);
		try {
			this.state = 294;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 289;
				this.match(ScriptGrammarParser.VAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 290;
				this.match(ScriptGrammarParser.INT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 291;
				this.match(ScriptGrammarParser.INT);
				this.state = 292;
				this.match(ScriptGrammarParser.COLON);
				this.state = 293;
				this.match(ScriptGrammarParser.INT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recursive_expression(): Recursive_expressionContext {
		let _localctx: Recursive_expressionContext = new Recursive_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ScriptGrammarParser.RULE_recursive_expression);
		let _la: number;
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 296;
				this.match(ScriptGrammarParser.DOT);
				this.state = 297;
				this.match(ScriptGrammarParser.VAR);
				this.state = 298;
				this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.T__1) | (1 << ScriptGrammarParser.T__2) | (1 << ScriptGrammarParser.T__3) | (1 << ScriptGrammarParser.T__4) | (1 << ScriptGrammarParser.T__5))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ScriptGrammarParser.MINUS - 41)) | (1 << (ScriptGrammarParser.NOT - 41)) | (1 << (ScriptGrammarParser.OPEN_PARANTHESIS - 41)) | (1 << (ScriptGrammarParser.OPEN_BRACE - 41)) | (1 << (ScriptGrammarParser.OPEN_BRACKET - 41)) | (1 << (ScriptGrammarParser.TRUE - 41)) | (1 << (ScriptGrammarParser.FALSE - 41)) | (1 << (ScriptGrammarParser.NULL - 41)) | (1 << (ScriptGrammarParser.VAR - 41)) | (1 << (ScriptGrammarParser.INT - 41)) | (1 << (ScriptGrammarParser.FLOAT - 41)) | (1 << (ScriptGrammarParser.STRING - 41)))) !== 0)) {
					{
					{
					this.state = 299;
					this.expr(0);
					}
					}
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ScriptGrammarParser.COMMA) {
					{
					{
					this.state = 305;
					this.match(ScriptGrammarParser.COMMA);
					this.state = 306;
					this.expr(0);
					}
					}
					this.state = 311;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 312;
				this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 313;
				this.match(ScriptGrammarParser.DOT);
				this.state = 314;
				this.match(ScriptGrammarParser.VAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 315;
				this.match(ScriptGrammarParser.OPEN_BRACKET);
				this.state = 316;
				this.atom();
				this.state = 317;
				this.match(ScriptGrammarParser.CLOSE_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ScriptGrammarParser.RULE_atom);
		let _la: number;
		try {
			this.state = 377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				_localctx = new ParanthesisExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 321;
				this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
				this.state = 322;
				this.expr(0);
				this.state = 323;
				this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
				}
				break;

			case 2:
				_localctx = new NumberAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 325;
				_la = this._input.LA(1);
				if (!(_la === ScriptGrammarParser.INT || _la === ScriptGrammarParser.FLOAT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				_localctx = new BooleanAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 326;
				_la = this._input.LA(1);
				if (!(_la === ScriptGrammarParser.TRUE || _la === ScriptGrammarParser.FALSE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 4:
				_localctx = new StringAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 327;
				this.match(ScriptGrammarParser.STRING);
				}
				break;

			case 5:
				_localctx = new NullAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 328;
				this.match(ScriptGrammarParser.NULL);
				}
				break;

			case 6:
				_localctx = new VarAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 329;
				this.match(ScriptGrammarParser.VAR);
				}
				break;

			case 7:
				_localctx = new NewKeywordIntitializationContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 330;
				this.match(ScriptGrammarParser.T__3);
				this.state = 331;
				this.match(ScriptGrammarParser.VAR);
				this.state = 332;
				this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.T__1) | (1 << ScriptGrammarParser.T__2) | (1 << ScriptGrammarParser.T__3) | (1 << ScriptGrammarParser.T__4) | (1 << ScriptGrammarParser.T__5))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ScriptGrammarParser.MINUS - 41)) | (1 << (ScriptGrammarParser.NOT - 41)) | (1 << (ScriptGrammarParser.OPEN_PARANTHESIS - 41)) | (1 << (ScriptGrammarParser.OPEN_BRACE - 41)) | (1 << (ScriptGrammarParser.OPEN_BRACKET - 41)) | (1 << (ScriptGrammarParser.TRUE - 41)) | (1 << (ScriptGrammarParser.FALSE - 41)) | (1 << (ScriptGrammarParser.NULL - 41)) | (1 << (ScriptGrammarParser.VAR - 41)) | (1 << (ScriptGrammarParser.INT - 41)) | (1 << (ScriptGrammarParser.FLOAT - 41)) | (1 << (ScriptGrammarParser.STRING - 41)))) !== 0)) {
					{
					{
					this.state = 333;
					this.expr(0);
					}
					}
					this.state = 338;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ScriptGrammarParser.COMMA) {
					{
					{
					this.state = 339;
					this.match(ScriptGrammarParser.COMMA);
					this.state = 340;
					this.expr(0);
					}
					}
					this.state = 345;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 346;
				this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
				}
				break;

			case 8:
				_localctx = new CustomModuleInitializationContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 347;
				this.match(ScriptGrammarParser.T__4);
				this.state = 348;
				this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
				this.state = 349;
				this.expr(0);
				this.state = 350;
				this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
				}
				break;

			case 9:
				_localctx = new ReadingInitializationContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 352;
				this.match(ScriptGrammarParser.T__5);
				this.state = 353;
				this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
				this.state = 354;
				this.expr(0);
				this.state = 355;
				this.match(ScriptGrammarParser.COMMA);
				this.state = 356;
				this.expr(0);
				this.state = 357;
				this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
				}
				break;

			case 10:
				_localctx = new ModuleAndSystemNameSpaceInitializationContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 359;
				this.match(ScriptGrammarParser.VAR);
				this.state = 360;
				this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.T__1) | (1 << ScriptGrammarParser.T__2) | (1 << ScriptGrammarParser.T__3) | (1 << ScriptGrammarParser.T__4) | (1 << ScriptGrammarParser.T__5))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (ScriptGrammarParser.MINUS - 41)) | (1 << (ScriptGrammarParser.NOT - 41)) | (1 << (ScriptGrammarParser.OPEN_PARANTHESIS - 41)) | (1 << (ScriptGrammarParser.OPEN_BRACE - 41)) | (1 << (ScriptGrammarParser.OPEN_BRACKET - 41)) | (1 << (ScriptGrammarParser.TRUE - 41)) | (1 << (ScriptGrammarParser.FALSE - 41)) | (1 << (ScriptGrammarParser.NULL - 41)) | (1 << (ScriptGrammarParser.VAR - 41)) | (1 << (ScriptGrammarParser.INT - 41)) | (1 << (ScriptGrammarParser.FLOAT - 41)) | (1 << (ScriptGrammarParser.STRING - 41)))) !== 0)) {
					{
					{
					this.state = 361;
					this.expr(0);
					}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ScriptGrammarParser.COMMA) {
					{
					{
					this.state = 367;
					this.match(ScriptGrammarParser.COMMA);
					this.state = 368;
					this.expr(0);
					}
					}
					this.state = 373;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 374;
				this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
				}
				break;

			case 11:
				_localctx = new ListOppContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 375;
				this.list_opperations();
				}
				break;

			case 12:
				_localctx = new MapOppsContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 376;
				this.map_opperations();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_opperations(): List_opperationsContext {
		let _localctx: List_opperationsContext = new List_opperationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ScriptGrammarParser.RULE_list_opperations);
		let _la: number;
		try {
			let _alt: number;
			this.state = 400;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				_localctx = new ListInitialisationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 381;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 379;
						this.match(ScriptGrammarParser.OPEN_BRACKET);
						this.state = 380;
						this.match(ScriptGrammarParser.CLOSE_BRACKET);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 383;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				_localctx = new ListInitialisationWithElementsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.match(ScriptGrammarParser.OPEN_BRACKET);
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 386;
					this.atom();
					}
					}
					this.state = 389;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.T__3) | (1 << ScriptGrammarParser.T__4) | (1 << ScriptGrammarParser.T__5))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ScriptGrammarParser.OPEN_PARANTHESIS - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACE - 51)) | (1 << (ScriptGrammarParser.OPEN_BRACKET - 51)) | (1 << (ScriptGrammarParser.TRUE - 51)) | (1 << (ScriptGrammarParser.FALSE - 51)) | (1 << (ScriptGrammarParser.NULL - 51)) | (1 << (ScriptGrammarParser.VAR - 51)) | (1 << (ScriptGrammarParser.INT - 51)) | (1 << (ScriptGrammarParser.FLOAT - 51)) | (1 << (ScriptGrammarParser.STRING - 51)))) !== 0));
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ScriptGrammarParser.COMMA) {
					{
					{
					this.state = 391;
					this.match(ScriptGrammarParser.COMMA);
					this.state = 392;
					this.atom();
					}
					}
					this.state = 397;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 398;
				this.match(ScriptGrammarParser.CLOSE_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map_opperations(): Map_opperationsContext {
		let _localctx: Map_opperationsContext = new Map_opperationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ScriptGrammarParser.RULE_map_opperations);
		try {
			let _alt: number;
			_localctx = new MapInitialisationContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 402;
					this.match(ScriptGrammarParser.OPEN_BRACE);
					this.state = 403;
					this.match(ScriptGrammarParser.CLOSE_BRACE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param(): Db_paramContext {
		let _localctx: Db_paramContext = new Db_paramContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ScriptGrammarParser.RULE_db_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(ScriptGrammarParser.OPEN_BRACE);
			this.state = 409;
			this.db_param_criteria();
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.T__7) | (1 << ScriptGrammarParser.T__8) | (1 << ScriptGrammarParser.T__9) | (1 << ScriptGrammarParser.T__10) | (1 << ScriptGrammarParser.T__11) | (1 << ScriptGrammarParser.T__13) | (1 << ScriptGrammarParser.T__14))) !== 0)) {
				{
				{
				this.state = 410;
				this.db_param_group();
				}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 416;
			this.match(ScriptGrammarParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param_group(): Db_param_groupContext {
		let _localctx: Db_param_groupContext = new Db_param_groupContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ScriptGrammarParser.RULE_db_param_group);
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ScriptGrammarParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 418;
				this.db_param_field();
				}
				break;
			case ScriptGrammarParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 419;
				this.db_param_field_criteria();
				}
				break;
			case ScriptGrammarParser.T__9:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 420;
				this.db_param_aggr();
				}
				break;
			case ScriptGrammarParser.T__10:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 421;
				this.db_param_limit();
				}
				break;
			case ScriptGrammarParser.T__11:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 422;
				this.db_param_range();
				}
				break;
			case ScriptGrammarParser.T__13:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 423;
				this.db_param_group_by();
				}
				break;
			case ScriptGrammarParser.T__14:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 424;
				this.db_param_sort();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param_criteria(): Db_param_criteriaContext {
		let _localctx: Db_param_criteriaContext = new Db_param_criteriaContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ScriptGrammarParser.RULE_db_param_criteria);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(ScriptGrammarParser.T__6);
			this.state = 428;
			this.match(ScriptGrammarParser.COLON);
			this.state = 429;
			this.expr(0);
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 430;
				this.match(ScriptGrammarParser.COMMA);
				}
				}
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param_field_criteria(): Db_param_field_criteriaContext {
		let _localctx: Db_param_field_criteriaContext = new Db_param_field_criteriaContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ScriptGrammarParser.RULE_db_param_field_criteria);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.match(ScriptGrammarParser.T__7);
			this.state = 437;
			this.match(ScriptGrammarParser.COLON);
			this.state = 438;
			this.criteria();
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 439;
				this.match(ScriptGrammarParser.COMMA);
				}
				}
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param_field(): Db_param_fieldContext {
		let _localctx: Db_param_fieldContext = new Db_param_fieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ScriptGrammarParser.RULE_db_param_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(ScriptGrammarParser.T__8);
			this.state = 446;
			this.match(ScriptGrammarParser.COLON);
			this.state = 447;
			this.expr(0);
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 448;
				this.match(ScriptGrammarParser.COMMA);
				}
				}
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param_aggr(): Db_param_aggrContext {
		let _localctx: Db_param_aggrContext = new Db_param_aggrContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ScriptGrammarParser.RULE_db_param_aggr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(ScriptGrammarParser.T__9);
			this.state = 455;
			this.match(ScriptGrammarParser.COLON);
			this.state = 456;
			this.expr(0);
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 457;
				this.match(ScriptGrammarParser.COMMA);
				}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param_limit(): Db_param_limitContext {
		let _localctx: Db_param_limitContext = new Db_param_limitContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ScriptGrammarParser.RULE_db_param_limit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.match(ScriptGrammarParser.T__10);
			this.state = 464;
			this.match(ScriptGrammarParser.COLON);
			this.state = 465;
			this.expr(0);
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 466;
				this.match(ScriptGrammarParser.COMMA);
				}
				}
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param_range(): Db_param_rangeContext {
		let _localctx: Db_param_rangeContext = new Db_param_rangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ScriptGrammarParser.RULE_db_param_range);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(ScriptGrammarParser.T__11);
			this.state = 473;
			this.match(ScriptGrammarParser.COLON);
			this.state = 474;
			this.expr(0);
			this.state = 475;
			this.match(ScriptGrammarParser.T__12);
			this.state = 476;
			this.expr(0);
			this.state = 480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 477;
				this.match(ScriptGrammarParser.COMMA);
				}
				}
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param_group_by(): Db_param_group_byContext {
		let _localctx: Db_param_group_byContext = new Db_param_group_byContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ScriptGrammarParser.RULE_db_param_group_by);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(ScriptGrammarParser.T__13);
			this.state = 484;
			this.match(ScriptGrammarParser.COLON);
			this.state = 485;
			this.expr(0);
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 486;
				this.match(ScriptGrammarParser.COMMA);
				}
				}
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db_param_sort(): Db_param_sortContext {
		let _localctx: Db_param_sortContext = new Db_param_sortContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ScriptGrammarParser.RULE_db_param_sort);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.match(ScriptGrammarParser.T__14);
			this.state = 493;
			this.match(ScriptGrammarParser.COLON);
			this.state = 494;
			this.expr(0);
			this.state = 495;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === ScriptGrammarParser.T__15 || _la === ScriptGrammarParser.T__16)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScriptGrammarParser.COMMA) {
				{
				{
				this.state = 496;
				this.match(ScriptGrammarParser.COMMA);
				}
				}
				this.state = 501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public criteria(): CriteriaContext {
		let _localctx: CriteriaContext = new CriteriaContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ScriptGrammarParser.RULE_criteria);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.match(ScriptGrammarParser.OPEN_BRACKET);
			this.state = 503;
			this.condition(0);
			this.state = 504;
			this.match(ScriptGrammarParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public condition(): ConditionContext;
	public condition(_p: number): ConditionContext;
	// @RuleVersion(0)
	public condition(_p?: number): ConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionContext = new ConditionContext(this._ctx, _parentState);
		let _prevctx: ConditionContext = _localctx;
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, ScriptGrammarParser.RULE_condition, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ScriptGrammarParser.VAR:
				{
				this.state = 507;
				this.condition_atom();
				}
				break;
			case ScriptGrammarParser.OPEN_PARANTHESIS:
				{
				this.state = 508;
				this.match(ScriptGrammarParser.OPEN_PARANTHESIS);
				this.state = 509;
				this.condition(0);
				this.state = 510;
				this.match(ScriptGrammarParser.CLOSE_PARANTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 519;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ScriptGrammarParser.RULE_condition);
					this.state = 514;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 515;
					_localctx._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === ScriptGrammarParser.OR || _la === ScriptGrammarParser.AND)) {
						_localctx._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 516;
					this.condition(3);
					}
					}
				}
				this.state = 521;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition_atom(): Condition_atomContext {
		let _localctx: Condition_atomContext = new Condition_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ScriptGrammarParser.RULE_condition_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.match(ScriptGrammarParser.VAR);
			this.state = 523;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ScriptGrammarParser.EQ - 34)) | (1 << (ScriptGrammarParser.NEQ - 34)) | (1 << (ScriptGrammarParser.GT - 34)) | (1 << (ScriptGrammarParser.LT - 34)) | (1 << (ScriptGrammarParser.GTEQ - 34)) | (1 << (ScriptGrammarParser.LTEQ - 34)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 524;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public data_type(): Data_typeContext {
		let _localctx: Data_typeContext = new Data_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ScriptGrammarParser.RULE_data_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScriptGrammarParser.VOID) | (1 << ScriptGrammarParser.DATA_TYPE_STRING) | (1 << ScriptGrammarParser.DATA_TYPE_NUMBER) | (1 << ScriptGrammarParser.DATA_TYPE_BOOLEAN) | (1 << ScriptGrammarParser.DATA_TYPE_MAP) | (1 << ScriptGrammarParser.DATA_TYPE_LIST) | (1 << ScriptGrammarParser.DATA_TYPE_CRITERIA) | (1 << ScriptGrammarParser.DATA_TYPE_OBJECT))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.boolean_expr_atom_sempred(_localctx as Boolean_expr_atomContext, predIndex);

		case 19:
			return this.expr_sempred(_localctx as ExprContext, predIndex);

		case 39:
			return this.condition_sempred(_localctx as ConditionContext, predIndex);
		}
		return true;
	}
	private boolean_expr_atom_sempred(_localctx: Boolean_expr_atomContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}
	private condition_sempred(_localctx: ConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03I\u0213\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x03\x02\x07\x02X\n\x02\f\x02\x0E\x02[\v\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03c\n\x03\f\x03\x0E\x03f\v\x03\x03\x03\x03\x03" +
		"\x07\x03j\n\x03\f\x03\x0E\x03m\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x07\x06z\n\x06\f" +
		"\x06\x0E\x06}\v\x06\x03\x07\x03\x07\x03\x07\x07\x07\x82\n\x07\f\x07\x0E" +
		"\x07\x85\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x8B\n\x07\f\x07" +
		"\x0E\x07\x8E\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA2" +
		"\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x06\f\xB2\n\f\r\f\x0E\f\xB3\x05\f\xB6\n\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x07\r\xBD\n\r\f\r\x0E\r\xC0\v\r\x03\r\x03\r\x05\r" +
		"\xC4\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xCE\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xD4\n\x10\f" +
		"\x10\x0E\x10\xD7\v\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xEF\n" +
		"\x14\x03\x14\x03\x14\x03\x14\x07\x14\xF4\n\x14\f\x14\x0E\x14\xF7\v\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u0103\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0111\n\x15" +
		"\f\x15\x0E\x15\u0114\v\x15\x03\x16\x03\x16\x06\x16\u0118\n\x16\r\x16\x0E" +
		"\x16\u0119\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0120\n\x17\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0129\n\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u012F\n\x1A\f\x1A\x0E\x1A\u0132\v" +
		"\x1A\x03\x1A\x03\x1A\x07\x1A\u0136\n\x1A\f\x1A\x0E\x1A\u0139\v\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0142\n\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0151\n\x1B\f\x1B\x0E\x1B\u0154" +
		"\v\x1B\x03\x1B\x03\x1B\x07\x1B\u0158\n\x1B\f\x1B\x0E\x1B\u015B\v\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u016D\n\x1B" +
		"\f\x1B\x0E\x1B\u0170\v\x1B\x03\x1B\x03\x1B\x07\x1B\u0174\n\x1B\f\x1B\x0E" +
		"\x1B\u0177\v\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u017C\n\x1B\x03\x1C\x03" +
		"\x1C\x06\x1C\u0180\n\x1C\r\x1C\x0E\x1C\u0181\x03\x1C\x03\x1C\x06\x1C\u0186" +
		"\n\x1C\r\x1C\x0E\x1C\u0187\x03\x1C\x03\x1C\x07\x1C\u018C\n\x1C\f\x1C\x0E" +
		"\x1C\u018F\v\x1C\x03\x1C\x03\x1C\x05\x1C\u0193\n\x1C\x03\x1D\x03\x1D\x06" +
		"\x1D\u0197\n\x1D\r\x1D\x0E\x1D\u0198\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u019E" +
		"\n\x1E\f\x1E\x0E\x1E\u01A1\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01AC\n\x1F\x03 \x03 \x03 \x03" +
		" \x07 \u01B2\n \f \x0E \u01B5\v \x03!\x03!\x03!\x03!\x07!\u01BB\n!\f!" +
		"\x0E!\u01BE\v!\x03\"\x03\"\x03\"\x03\"\x07\"\u01C4\n\"\f\"\x0E\"\u01C7" +
		"\v\"\x03#\x03#\x03#\x03#\x07#\u01CD\n#\f#\x0E#\u01D0\v#\x03$\x03$\x03" +
		"$\x03$\x07$\u01D6\n$\f$\x0E$\u01D9\v$\x03%\x03%\x03%\x03%\x03%\x03%\x07" +
		"%\u01E1\n%\f%\x0E%\u01E4\v%\x03&\x03&\x03&\x03&\x07&\u01EA\n&\f&\x0E&" +
		"\u01ED\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01F4\n\'\f\'\x0E\'\u01F7" +
		"\v\'\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0203\n)\x03" +
		")\x03)\x03)\x07)\u0208\n)\f)\x0E)\u020B\v)\x03*\x03*\x03*\x03*\x03+\x03" +
		"+\x03+\x02\x02\x05&(P,\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02\x02\f\x04" +
		"\x02\x1F\x1F\"\"\x03\x02,.\x03\x02*+\x03\x02$)\x04\x02  ##\x03\x02BC\x03" +
		"\x02CD\x03\x02;<\x03\x02\x12\x13\x03\x02\x14\x1B\x02\u0236\x02Y\x03\x02" +
		"\x02\x02\x04^\x03\x02\x02\x02\x06s\x03\x02\x02\x02\bu\x03\x02\x02\x02" +
		"\n{\x03\x02\x02\x02\f~\x03\x02\x02\x02\x0E\x91\x03\x02\x02\x02\x10\x93" +
		"\x03\x02\x02\x02\x12\xA1\x03\x02\x02\x02\x14\xA3\x03\x02\x02\x02\x16\xB5" +
		"\x03\x02\x02\x02\x18\xB7\x03\x02\x02\x02\x1A\xC5\x03\x02\x02\x02\x1C\xCD" +
		"\x03\x02\x02\x02\x1E\xCF\x03\x02\x02\x02 \xDC\x03\x02\x02\x02\"\xE0\x03" +
		"\x02\x02\x02$\xE4\x03\x02\x02\x02&\xEE\x03\x02\x02\x02(\u0102\x03\x02" +
		"\x02\x02*\u0115\x03\x02\x02\x02,\u011F\x03\x02\x02\x02.\u0121\x03\x02" +
		"\x02\x020\u0128\x03\x02\x02\x022\u0141\x03\x02\x02\x024\u017B\x03\x02" +
		"\x02\x026\u0192\x03\x02\x02\x028\u0196\x03\x02\x02\x02:\u019A\x03\x02" +
		"\x02\x02<\u01AB\x03\x02\x02\x02>\u01AD\x03\x02\x02\x02@\u01B6\x03\x02" +
		"\x02\x02B\u01BF\x03\x02\x02\x02D\u01C8\x03\x02\x02\x02F\u01D1\x03\x02" +
		"\x02\x02H\u01DA\x03\x02\x02\x02J\u01E5\x03\x02\x02\x02L\u01EE\x03\x02" +
		"\x02\x02N\u01F8\x03\x02\x02\x02P\u0202\x03\x02\x02\x02R\u020C\x03\x02" +
		"\x02\x02T\u0210\x03\x02\x02\x02VX\x05\x12\n\x02WV\x03\x02\x02\x02X[\x03" +
		"\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[Y" +
		"\x03\x02\x02\x02\\]\x07\x02\x02\x03]\x03\x03\x02\x02\x02^_\x05T+\x02_" +
		"`\x05\x06\x04\x02`d\x075\x02\x02ac\x05\b\x05\x02ba\x03\x02\x02\x02cf\x03" +
		"\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02ek\x03\x02\x02\x02fd\x03" +
		"\x02\x02\x02gh\x071\x02\x02hj\x05\b\x05\x02ig\x03\x02\x02\x02jm\x03\x02" +
		"\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mk\x03\x02" +
		"\x02\x02no\x076\x02\x02op\x077\x02\x02pq\x05\n\x06\x02qr\x078\x02\x02" +
		"r\x05\x03\x02\x02\x02st\x07B\x02\x02t\x07\x03\x02\x02\x02uv\x05T+\x02" +
		"vw\x07B\x02\x02w\t\x03\x02\x02\x02xz\x05\x12\n\x02yx\x03\x02\x02\x02z" +
		"}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\v\x03\x02\x02\x02" +
		"}{\x03\x02\x02\x02~\x7F\x07\x1D\x02\x02\x7F\x83\x077\x02\x02\x80\x82\x05" +
		"\x0E\b\x02\x81\x80\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85\x83\x03" +
		"\x02\x02\x02\x86\x87\x078\x02\x02\x87\x88\x07\x1E\x02\x02\x88\x8C\x07" +
		"7\x02\x02\x89\x8B\x05\x10\t\x02\x8A\x89\x03\x02\x02\x02\x8B\x8E\x03\x02" +
		"\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02" +
		"\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F\x90\x078\x02\x02\x90\r\x03\x02\x02" +
		"\x02\x91\x92\x05\x12\n\x02\x92\x0F\x03\x02\x02\x02\x93\x94\x05\x12\n\x02" +
		"\x94\x11\x03\x02\x02\x02\x95\xA2\x05\x14\v\x02\x96\xA2\x05\x18\r\x02\x97" +
		"\xA2\x05\x1E\x10\x02\x98\xA2\x05 \x11\x02\x99\x9A\x05*\x16\x02\x9A\x9B" +
		"\x072\x02\x02\x9B\xA2\x03\x02\x02\x02\x9C\xA2\x05\"\x12\x02\x9D\xA2\x05" +
		"\f\x07\x02\x9E\xA2\x05\x04\x03\x02\x9F\xA0\x07I\x02\x02\xA0\xA2\b\n\x01" +
		"\x02\xA1\x95\x03\x02\x02\x02\xA1\x96\x03\x02\x02\x02\xA1\x97\x03\x02\x02" +
		"\x02\xA1\x98\x03\x02\x02\x02\xA1\x99\x03\x02\x02\x02\xA1\x9C\x03\x02\x02" +
		"\x02\xA1\x9D\x03\x02\x02\x02\xA1\x9E\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
		"\x02\xA2\x13\x03\x02\x02\x02\xA3\xA4\x05\x16\f\x02\xA4\xA5\x074\x02\x02" +
		"\xA5\xA6\x05(\x15\x02\xA6\xA7\x072\x02\x02\xA7\x15\x03\x02\x02\x02\xA8" +
		"\xB6\x07B\x02\x02\xA9\xAA\x07B\x02\x02\xAA\xAB\x079\x02\x02\xAB\xAC\x05" +
		"(\x15\x02\xAC\xAD\x07:\x02\x02\xAD\xB6\x03\x02\x02\x02\xAE\xB1\x07B\x02" +
		"\x02\xAF\xB0\x07!\x02\x02\xB0\xB2\x07B\x02\x02\xB1\xAF\x03\x02\x02\x02" +
		"\xB2\xB3\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02" +
		"\xB4\xB6\x03\x02\x02\x02\xB5\xA8\x03\x02\x02\x02\xB5\xA9\x03\x02\x02\x02" +
		"\xB5\xAE\x03\x02\x02\x02\xB6\x17\x03\x02\x02\x02\xB7\xB8\x07>\x02\x02" +
		"\xB8\xBE\x05\x1A\x0E\x02\xB9\xBA\x07?\x02\x02\xBA\xBB\x07>\x02\x02\xBB" +
		"\xBD\x05\x1A\x0E\x02\xBC\xB9\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE" +
		"\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC3\x03\x02\x02\x02\xC0" +
		"\xBE\x03\x02\x02\x02\xC1\xC2\x07?\x02\x02\xC2\xC4\x05\x1C\x0F\x02\xC3" +
		"\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\x19\x03\x02\x02\x02\xC5" +
		"\xC6\x05$\x13\x02\xC6\xC7\x05\x1C\x0F\x02\xC7\x1B\x03\x02\x02\x02\xC8" +
		"\xC9\x077\x02\x02\xC9\xCA\x05\n\x06\x02\xCA\xCB\x078\x02\x02\xCB\xCE\x03" +
		"\x02\x02\x02\xCC\xCE\x05\x12\n\x02\xCD\xC8\x03\x02\x02\x02\xCD\xCC\x03" +
		"\x02\x02\x02\xCE\x1D\x03\x02\x02\x02\xCF\xD0\x07@\x02\x02\xD0\xD5\x07" +
		"B\x02\x02\xD1\xD2\x071\x02\x02\xD2\xD4\x07B\x02\x02\xD3\xD1\x03\x02\x02" +
		"\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02" +
		"\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xD9\x07\x03\x02" +
		"\x02\xD9\xDA\x05(\x15\x02\xDA\xDB\x05\x1C\x0F\x02\xDB\x1F\x03\x02\x02" +
		"\x02\xDC\xDD\x07A\x02\x02\xDD\xDE\x05(\x15\x02\xDE\xDF\x072\x02\x02\xDF" +
		"!\x03\x02\x02\x02\xE0\xE1\x07\x1C\x02\x02\xE1\xE2\x05(\x15\x02\xE2\xE3" +
		"\x072\x02\x02\xE3#\x03\x02\x02\x02\xE4\xE5\x075\x02\x02\xE5\xE6\x05&\x14" +
		"\x02\xE6\xE7\x076\x02\x02\xE7%\x03\x02\x02\x02\xE8\xE9\b\x14\x01\x02\xE9" +
		"\xEF\x05(\x15\x02\xEA\xEB\x075\x02\x02\xEB\xEC\x05&\x14\x02\xEC\xED\x07" +
		"6\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xE8\x03\x02\x02\x02\xEE\xEA\x03" +
		"\x02\x02\x02\xEF\xF5\x03\x02\x02\x02\xF0\xF1\f\x04\x02\x02\xF1\xF2\t\x02" +
		"\x02\x02\xF2\xF4\x05&\x14\x05\xF3\xF0\x03\x02\x02\x02\xF4\xF7\x03\x02" +
		"\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\'\x03\x02" +
		"\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xF9\b\x15\x01\x02\xF9\xFA\x07+\x02" +
		"\x02\xFA\u0103\x05(\x15\r\xFB\xFC\x070\x02\x02\xFC\u0103\x05(\x15\f\xFD" +
		"\u0103\x054\x1B\x02\xFE\u0103\x05,\x17\x02\xFF\u0103\x05*\x16\x02\u0100" +
		"\u0103\x05:\x1E\x02\u0101\u0103\x05N(\x02\u0102\xF8\x03\x02\x02\x02\u0102" +
		"\xFB\x03\x02\x02\x02\u0102\xFD\x03\x02\x02\x02\u0102\xFE\x03\x02\x02\x02" +
		"\u0102\xFF\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0101\x03" +
		"\x02\x02\x02\u0103\u0112\x03\x02\x02\x02\u0104\u0105\f\v\x02\x02\u0105" +
		"\u0106\t\x03\x02\x02\u0106\u0111\x05(\x15\f\u0107\u0108\f\n\x02\x02\u0108" +
		"\u0109\t\x04\x02\x02\u0109\u0111\x05(\x15\v\u010A\u010B\f\t\x02\x02\u010B" +
		"\u010C\t\x05\x02\x02\u010C\u0111\x05(\x15\n\u010D\u010E\f\b\x02\x02\u010E" +
		"\u010F\t\x06\x02\x02\u010F\u0111\x05(\x15\t\u0110\u0104\x03\x02\x02\x02" +
		"\u0110\u0107\x03\x02\x02\x02\u0110\u010A\x03\x02\x02\x02\u0110\u010D\x03" +
		"\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112" +
		"\u0113\x03\x02\x02\x02\u0113)\x03\x02\x02\x02\u0114\u0112\x03\x02\x02" +
		"\x02\u0115\u0117\x054\x1B\x02\u0116\u0118\x052\x1A\x02\u0117\u0116\x03" +
		"\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119" +
		"\u011A\x03\x02\x02\x02\u011A+\x03\x02\x02\x02\u011B\u011C\x07\x04\x02" +
		"\x02\u011C\u0120\x05.\x18\x02\u011D\u011E\x07\x05\x02\x02\u011E\u0120" +
		"\x050\x19\x02\u011F\u011B\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02" +
		"\u0120-\x03\x02\x02\x02\u0121\u0122\t\x07\x02\x02\u0122/\x03\x02\x02\x02" +
		"\u0123\u0129\x07B\x02\x02\u0124\u0129\x07C\x02\x02\u0125\u0126\x07C\x02" +
		"\x02\u0126\u0127\x073\x02\x02\u0127\u0129\x07C\x02\x02\u0128\u0123\x03" +
		"\x02\x02\x02\u0128\u0124\x03\x02\x02\x02\u0128\u0125\x03\x02\x02\x02\u0129" +
		"1\x03\x02\x02\x02\u012A\u012B\x07!\x02\x02\u012B\u012C\x07B\x02\x02\u012C" +
		"\u0130\x075\x02\x02\u012D\u012F\x05(\x15\x02\u012E\u012D\x03\x02\x02\x02" +
		"\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03" +
		"\x02\x02\x02\u0131\u0137\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133" +
		"\u0134\x071\x02\x02\u0134\u0136\x05(\x15\x02\u0135\u0133\x03\x02\x02\x02" +
		"\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03" +
		"\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A" +
		"\u0142\x076\x02\x02\u013B\u013C\x07!\x02\x02\u013C\u0142\x07B\x02\x02" +
		"\u013D\u013E\x079\x02\x02\u013E\u013F\x054\x1B\x02\u013F\u0140\x07:\x02" +
		"\x02\u0140\u0142\x03\x02\x02\x02\u0141\u012A\x03\x02\x02\x02\u0141\u013B" +
		"\x03\x02\x02\x02\u0141\u013D\x03\x02\x02\x02\u01423\x03\x02\x02\x02\u0143" +
		"\u0144\x075\x02\x02\u0144\u0145\x05(\x15\x02\u0145\u0146\x076\x02\x02" +
		"\u0146\u017C\x03\x02\x02\x02\u0147\u017C\t\b\x02\x02\u0148\u017C\t\t\x02" +
		"\x02\u0149\u017C\x07E\x02\x02\u014A\u017C\x07=\x02\x02\u014B\u017C\x07" +
		"B\x02\x02\u014C\u014D\x07\x06\x02\x02\u014D\u014E\x07B\x02\x02\u014E\u0152" +
		"\x075\x02\x02\u014F\u0151\x05(\x15\x02\u0150\u014F\x03\x02\x02\x02\u0151" +
		"\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02" +
		"\x02\x02\u0153\u0159\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155" +
		"\u0156\x071\x02\x02\u0156\u0158\x05(\x15\x02\u0157\u0155\x03\x02\x02\x02" +
		"\u0158\u015B\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03" +
		"\x02\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015C" +
		"\u017C\x076\x02\x02\u015D\u015E\x07\x07\x02\x02\u015E\u015F\x075\x02\x02" +
		"\u015F\u0160\x05(\x15\x02\u0160\u0161\x076\x02\x02\u0161\u017C\x03\x02" +
		"\x02\x02\u0162\u0163\x07\b\x02\x02\u0163\u0164\x075\x02\x02\u0164\u0165" +
		"\x05(\x15\x02\u0165\u0166\x071\x02\x02\u0166\u0167\x05(\x15\x02\u0167" +
		"\u0168\x076\x02\x02\u0168\u017C\x03\x02\x02\x02\u0169\u016A\x07B\x02\x02" +
		"\u016A\u016E\x075\x02\x02\u016B\u016D\x05(\x15\x02\u016C\u016B\x03\x02" +
		"\x02\x02\u016D\u0170\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E" +
		"\u016F\x03\x02\x02\x02\u016F\u0175\x03\x02\x02\x02\u0170\u016E\x03\x02" +
		"\x02\x02\u0171\u0172\x071\x02\x02\u0172\u0174\x05(\x15\x02\u0173\u0171" +
		"\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02" +
		"\u0175\u0176\x03\x02\x02\x02\u0176\u0178\x03\x02\x02\x02\u0177\u0175\x03" +
		"\x02\x02\x02\u0178\u017C\x076\x02\x02\u0179\u017C\x056\x1C\x02\u017A\u017C" +
		"\x058\x1D\x02\u017B\u0143\x03\x02\x02\x02\u017B\u0147\x03\x02\x02\x02" +
		"\u017B\u0148\x03\x02\x02\x02\u017B\u0149\x03\x02\x02\x02\u017B\u014A\x03" +
		"\x02\x02\x02\u017B\u014B\x03\x02\x02\x02\u017B\u014C\x03\x02\x02\x02\u017B" +
		"\u015D\x03\x02\x02\x02\u017B\u0162\x03\x02\x02\x02\u017B\u0169\x03\x02" +
		"\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017A\x03\x02\x02\x02\u017C" +
		"5\x03\x02\x02\x02\u017D\u017E\x079\x02\x02\u017E\u0180\x07:\x02\x02\u017F" +
		"\u017D\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u017F\x03\x02" +
		"\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0193\x03\x02\x02\x02\u0183" +
		"\u0185\x079\x02\x02\u0184\u0186\x054\x1B\x02\u0185\u0184\x03\x02\x02\x02" +
		"\u0186\u0187\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03" +
		"\x02\x02\x02\u0188\u018D\x03\x02\x02\x02\u0189\u018A\x071\x02\x02\u018A" +
		"\u018C\x054\x1B\x02\u018B\u0189\x03\x02\x02\x02\u018C\u018F\x03\x02\x02" +
		"\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0190" +
		"\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0191\x07:\x02\x02" +
		"\u0191\u0193\x03\x02\x02\x02\u0192\u017F\x03\x02\x02\x02\u0192\u0183\x03" +
		"\x02\x02\x02\u01937\x03\x02\x02\x02\u0194\u0195\x077\x02\x02\u0195\u0197" +
		"\x078\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02" +
		"\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u01999\x03\x02" +
		"\x02\x02\u019A\u019B\x077\x02\x02\u019B\u019F\x05> \x02\u019C\u019E\x05" +
		"<\x1F\x02\u019D\u019C\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F" +
		"\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A2\x03\x02" +
		"\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\x078\x02\x02\u01A3;\x03" +
		"\x02\x02\x02\u01A4\u01AC\x05B\"\x02\u01A5\u01AC\x05@!\x02\u01A6\u01AC" +
		"\x05D#\x02\u01A7\u01AC\x05F$\x02\u01A8\u01AC\x05H%\x02\u01A9\u01AC\x05" +
		"J&\x02\u01AA\u01AC\x05L\'\x02\u01AB\u01A4\x03\x02\x02\x02\u01AB\u01A5" +
		"\x03\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02\x02\x02" +
		"\u01AB\u01A8\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AA\x03" +
		"\x02\x02\x02\u01AC=\x03\x02\x02\x02\u01AD\u01AE\x07\t\x02\x02\u01AE\u01AF" +
		"\x073\x02\x02\u01AF\u01B3\x05(\x15\x02\u01B0\u01B2\x071\x02\x02\u01B1" +
		"\u01B0\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02" +
		"\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4?\x03\x02\x02\x02\u01B5\u01B3" +
		"\x03\x02\x02\x02\u01B6\u01B7\x07\n\x02\x02\u01B7\u01B8\x073\x02\x02\u01B8" +
		"\u01BC\x05N(\x02\u01B9\u01BB\x071\x02\x02\u01BA\u01B9\x03\x02\x02\x02" +
		"\u01BB\u01BE\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03" +
		"\x02\x02\x02\u01BDA\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF" +
		"\u01C0\x07\v\x02\x02\u01C0\u01C1\x073\x02\x02\u01C1\u01C5\x05(\x15\x02" +
		"\u01C2\u01C4\x071\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4\u01C7\x03" +
		"\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6" +
		"C\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01C9\x07\f\x02\x02" +
		"\u01C9\u01CA\x073\x02\x02\u01CA\u01CE\x05(\x15\x02\u01CB\u01CD\x071\x02" +
		"\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC" +
		"\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CFE\x03\x02\x02\x02\u01D0" +
		"\u01CE\x03\x02\x02\x02\u01D1\u01D2\x07\r\x02\x02\u01D2\u01D3\x073\x02" +
		"\x02\u01D3\u01D7\x05(\x15\x02\u01D4\u01D6\x071\x02\x02\u01D5\u01D4\x03" +
		"\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7" +
		"\u01D8\x03\x02\x02\x02\u01D8G\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02" +
		"\x02\u01DA\u01DB\x07\x0E\x02\x02\u01DB\u01DC\x073\x02\x02\u01DC\u01DD" +
		"\x05(\x15\x02\u01DD\u01DE\x07\x0F\x02\x02\u01DE\u01E2\x05(\x15\x02\u01DF" +
		"\u01E1\x071\x02\x02\u01E0\u01DF\x03\x02\x02\x02\u01E1\u01E4\x03\x02\x02" +
		"\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3I\x03" +
		"\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01E6\x07\x10\x02\x02\u01E6" +
		"\u01E7\x073\x02\x02\u01E7\u01EB\x05(\x15\x02\u01E8\u01EA\x071\x02\x02" +
		"\u01E9\u01E8\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03" +
		"\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01ECK\x03\x02\x02\x02\u01ED" +
		"\u01EB\x03\x02\x02\x02\u01EE\u01EF\x07\x11\x02\x02\u01EF\u01F0\x073\x02" +
		"\x02\u01F0\u01F1\x05(\x15\x02\u01F1\u01F5\t\n\x02\x02\u01F2\u01F4\x07" +
		"1\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F4\u01F7\x03\x02\x02\x02\u01F5" +
		"\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6M\x03\x02\x02" +
		"\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8\u01F9\x079\x02\x02\u01F9\u01FA" +
		"\x05P)\x02\u01FA\u01FB\x07:\x02\x02\u01FBO\x03\x02\x02\x02\u01FC\u01FD" +
		"\b)\x01\x02\u01FD\u0203\x05R*\x02\u01FE\u01FF\x075\x02\x02\u01FF\u0200" +
		"\x05P)\x02\u0200\u0201\x076\x02\x02\u0201\u0203\x03\x02\x02\x02\u0202" +
		"\u01FC\x03\x02\x02\x02\u0202\u01FE\x03\x02\x02\x02\u0203\u0209\x03\x02" +
		"\x02\x02\u0204\u0205\f\x04\x02\x02\u0205\u0206\t\x02\x02\x02\u0206\u0208" +
		"\x05P)\x05\u0207\u0204\x03\x02\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209" +
		"\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020AQ\x03\x02\x02" +
		"\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020D\x07B\x02\x02\u020D\u020E" +
		"\t\x05\x02\x02\u020E\u020F\x05(\x15\x02\u020FS\x03\x02\x02\x02\u0210\u0211" +
		"\t\v\x02\x02\u0211U\x03\x02\x02\x020Ydk{\x83\x8C\xA1\xB3\xB5\xBE\xC3\xCD" +
		"\xD5\xEE\xF5\u0102\u0110\u0112\u0119\u011F\u0128\u0130\u0137\u0141\u0152" +
		"\u0159\u016E\u0175\u017B\u0181\u0187\u018D\u0192\u0198\u019F\u01AB\u01B3" +
		"\u01BC\u01C5\u01CE\u01D7\u01E2\u01EB\u01F5\u0202\u0209";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ScriptGrammarParser.__ATN) {
			ScriptGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ScriptGrammarParser._serializedATN));
		}

		return ScriptGrammarParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ScriptGrammarParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_start; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
}


export class Function_blockContext extends ParserRuleContext {
	public data_type(): Data_typeContext {
		return this.getRuleContext(0, Data_typeContext);
	}
	public function_name_declare(): Function_name_declareContext {
		return this.getRuleContext(0, Function_name_declareContext);
	}
	public OPEN_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public CLOSE_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_BRACE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_BRACE, 0); }
	public function_param(): Function_paramContext[];
	public function_param(i: number): Function_paramContext;
	public function_param(i?: number): Function_paramContext | Function_paramContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_paramContext);
		} else {
			return this.getRuleContext(i, Function_paramContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_function_block; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterFunction_block) {
			listener.enterFunction_block(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitFunction_block) {
			listener.exitFunction_block(this);
		}
	}
}


export class Function_name_declareContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(ScriptGrammarParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_function_name_declare; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterFunction_name_declare) {
			listener.enterFunction_name_declare(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitFunction_name_declare) {
			listener.exitFunction_name_declare(this);
		}
	}
}


export class Function_paramContext extends ParserRuleContext {
	public data_type(): Data_typeContext {
		return this.getRuleContext(0, Data_typeContext);
	}
	public VAR(): TerminalNode { return this.getToken(ScriptGrammarParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_function_param; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterFunction_param) {
			listener.enterFunction_param(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitFunction_param) {
			listener.exitFunction_param(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_block; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class Try_catchContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(ScriptGrammarParser.TRY, 0); }
	public OPEN_BRACE(): TerminalNode[];
	public OPEN_BRACE(i: number): TerminalNode;
	public OPEN_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.OPEN_BRACE);
		} else {
			return this.getToken(ScriptGrammarParser.OPEN_BRACE, i);
		}
	}
	public CLOSE_BRACE(): TerminalNode[];
	public CLOSE_BRACE(i: number): TerminalNode;
	public CLOSE_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.CLOSE_BRACE);
		} else {
			return this.getToken(ScriptGrammarParser.CLOSE_BRACE, i);
		}
	}
	public CATCH(): TerminalNode { return this.getToken(ScriptGrammarParser.CATCH, 0); }
	public try_statement(): Try_statementContext[];
	public try_statement(i: number): Try_statementContext;
	public try_statement(i?: number): Try_statementContext | Try_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Try_statementContext);
		} else {
			return this.getRuleContext(i, Try_statementContext);
		}
	}
	public catch_statement(): Catch_statementContext[];
	public catch_statement(i: number): Catch_statementContext;
	public catch_statement(i?: number): Catch_statementContext | Catch_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Catch_statementContext);
		} else {
			return this.getRuleContext(i, Catch_statementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_try_catch; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterTry_catch) {
			listener.enterTry_catch(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitTry_catch) {
			listener.exitTry_catch(this);
		}
	}
}


export class Try_statementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_try_statement; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterTry_statement) {
			listener.enterTry_statement(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitTry_statement) {
			listener.exitTry_statement(this);
		}
	}
}


export class Catch_statementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_catch_statement; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCatch_statement) {
			listener.enterCatch_statement(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCatch_statement) {
			listener.exitCatch_statement(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _OTHER!: Token;
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public for_each_statement(): For_each_statementContext | undefined {
		return this.tryGetRuleContext(0, For_each_statementContext);
	}
	public log(): LogContext | undefined {
		return this.tryGetRuleContext(0, LogContext);
	}
	public stand_alone_expr(): Stand_alone_exprContext | undefined {
		return this.tryGetRuleContext(0, Stand_alone_exprContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.SEMICOLON, 0); }
	public function_return(): Function_returnContext | undefined {
		return this.tryGetRuleContext(0, Function_returnContext);
	}
	public try_catch(): Try_catchContext | undefined {
		return this.tryGetRuleContext(0, Try_catchContext);
	}
	public function_block(): Function_blockContext | undefined {
		return this.tryGetRuleContext(0, Function_blockContext);
	}
	public OTHER(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.OTHER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_statement; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public assignment_var(): Assignment_varContext {
		return this.getRuleContext(0, Assignment_varContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(ScriptGrammarParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(ScriptGrammarParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_assignment; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class Assignment_varContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_assignment_var; }
	public copyFrom(ctx: Assignment_varContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignSingleVarContext extends Assignment_varContext {
	public VAR(): TerminalNode { return this.getToken(ScriptGrammarParser.VAR, 0); }
	constructor(ctx: Assignment_varContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterAssignSingleVar) {
			listener.enterAssignSingleVar(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitAssignSingleVar) {
			listener.exitAssignSingleVar(this);
		}
	}
}
export class AssignSingleBracketVarContext extends Assignment_varContext {
	public VAR(): TerminalNode { return this.getToken(ScriptGrammarParser.VAR, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.OPEN_BRACKET, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.CLOSE_BRACKET, 0); }
	constructor(ctx: Assignment_varContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterAssignSingleBracketVar) {
			listener.enterAssignSingleBracketVar(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitAssignSingleBracketVar) {
			listener.exitAssignSingleBracketVar(this);
		}
	}
}
export class AssignMultiDotVarContext extends Assignment_varContext {
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.VAR);
		} else {
			return this.getToken(ScriptGrammarParser.VAR, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.DOT);
		} else {
			return this.getToken(ScriptGrammarParser.DOT, i);
		}
	}
	constructor(ctx: Assignment_varContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterAssignMultiDotVar) {
			listener.enterAssignMultiDotVar(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitAssignMultiDotVar) {
			listener.exitAssignMultiDotVar(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.IF);
		} else {
			return this.getToken(ScriptGrammarParser.IF, i);
		}
	}
	public condition_block(): Condition_blockContext[];
	public condition_block(i: number): Condition_blockContext;
	public condition_block(i?: number): Condition_blockContext | Condition_blockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Condition_blockContext);
		} else {
			return this.getRuleContext(i, Condition_blockContext);
		}
	}
	public ELSE(): TerminalNode[];
	public ELSE(i: number): TerminalNode;
	public ELSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.ELSE);
		} else {
			return this.getToken(ScriptGrammarParser.ELSE, i);
		}
	}
	public statement_block(): Statement_blockContext | undefined {
		return this.tryGetRuleContext(0, Statement_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_if_statement; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
}


export class Condition_blockContext extends ParserRuleContext {
	public boolean_expr(): Boolean_exprContext {
		return this.getRuleContext(0, Boolean_exprContext);
	}
	public statement_block(): Statement_blockContext {
		return this.getRuleContext(0, Statement_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_condition_block; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCondition_block) {
			listener.enterCondition_block(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCondition_block) {
			listener.exitCondition_block(this);
		}
	}
}


export class Statement_blockContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.OPEN_BRACE, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.CLOSE_BRACE, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_statement_block; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterStatement_block) {
			listener.enterStatement_block(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitStatement_block) {
			listener.exitStatement_block(this);
		}
	}
}


export class For_each_statementContext extends ParserRuleContext {
	public FOR_EACH(): TerminalNode { return this.getToken(ScriptGrammarParser.FOR_EACH, 0); }
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.VAR);
		} else {
			return this.getToken(ScriptGrammarParser.VAR, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public statement_block(): Statement_blockContext {
		return this.getRuleContext(0, Statement_blockContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_for_each_statement; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterFor_each_statement) {
			listener.enterFor_each_statement(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitFor_each_statement) {
			listener.exitFor_each_statement(this);
		}
	}
}


export class LogContext extends ParserRuleContext {
	public LOG(): TerminalNode { return this.getToken(ScriptGrammarParser.LOG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(ScriptGrammarParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_log; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterLog) {
			listener.enterLog(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitLog) {
			listener.exitLog(this);
		}
	}
}


export class Function_returnContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(ScriptGrammarParser.RETURN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(ScriptGrammarParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_function_return; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterFunction_return) {
			listener.enterFunction_return(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitFunction_return) {
			listener.exitFunction_return(this);
		}
	}
}


export class Boolean_exprContext extends ParserRuleContext {
	public OPEN_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public boolean_expr_atom(): Boolean_expr_atomContext {
		return this.getRuleContext(0, Boolean_expr_atomContext);
	}
	public CLOSE_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_boolean_expr; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterBoolean_expr) {
			listener.enterBoolean_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitBoolean_expr) {
			listener.exitBoolean_expr(this);
		}
	}
}


export class Boolean_expr_atomContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_boolean_expr_atom; }
	public copyFrom(ctx: Boolean_expr_atomContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprForBooleanContext extends Boolean_expr_atomContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Boolean_expr_atomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterExprForBoolean) {
			listener.enterExprForBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitExprForBoolean) {
			listener.exitExprForBoolean(this);
		}
	}
}
export class BooleanExprCalculationContext extends Boolean_expr_atomContext {
	public _op!: Token;
	public boolean_expr_atom(): Boolean_expr_atomContext[];
	public boolean_expr_atom(i: number): Boolean_expr_atomContext;
	public boolean_expr_atom(i?: number): Boolean_expr_atomContext | Boolean_expr_atomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Boolean_expr_atomContext);
		} else {
			return this.getRuleContext(i, Boolean_expr_atomContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.OR, 0); }
	constructor(ctx: Boolean_expr_atomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterBooleanExprCalculation) {
			listener.enterBooleanExprCalculation(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitBooleanExprCalculation) {
			listener.exitBooleanExprCalculation(this);
		}
	}
}
export class BoolExprParanthesisContext extends Boolean_expr_atomContext {
	public OPEN_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public boolean_expr_atom(): Boolean_expr_atomContext {
		return this.getRuleContext(0, Boolean_expr_atomContext);
	}
	public CLOSE_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	constructor(ctx: Boolean_expr_atomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterBoolExprParanthesis) {
			listener.enterBoolExprParanthesis(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitBoolExprParanthesis) {
			listener.exitBoolExprParanthesis(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryMinusExprContext extends ExprContext {
	public MINUS(): TerminalNode { return this.getToken(ScriptGrammarParser.MINUS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterUnaryMinusExpr) {
			listener.enterUnaryMinusExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitUnaryMinusExpr) {
			listener.exitUnaryMinusExpr(this);
		}
	}
}
export class NotExprContext extends ExprContext {
	public NOT(): TerminalNode { return this.getToken(ScriptGrammarParser.NOT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterNotExpr) {
			listener.enterNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitNotExpr) {
			listener.exitNotExpr(this);
		}
	}
}
export class ArithmeticFirstPrecedenceExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MULT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.MOD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterArithmeticFirstPrecedenceExpr) {
			listener.enterArithmeticFirstPrecedenceExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitArithmeticFirstPrecedenceExpr) {
			listener.exitArithmeticFirstPrecedenceExpr(this);
		}
	}
}
export class ArithmeticSecondPrecedenceExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterArithmeticSecondPrecedenceExpr) {
			listener.enterArithmeticSecondPrecedenceExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitArithmeticSecondPrecedenceExpr) {
			listener.exitArithmeticSecondPrecedenceExpr(this);
		}
	}
}
export class RelationalExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LTEQ(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.LTEQ, 0); }
	public GTEQ(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.GTEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.GT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.NEQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterRelationalExpr) {
			listener.enterRelationalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitRelationalExpr) {
			listener.exitRelationalExpr(this);
		}
	}
}
export class BooleanExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public SINGLE_AND(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.SINGLE_AND, 0); }
	public SINGLE_OR(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.SINGLE_OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterBooleanExpr) {
			listener.enterBooleanExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitBooleanExpr) {
			listener.exitBooleanExpr(this);
		}
	}
}
export class AtomExprContext extends ExprContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterAtomExpr) {
			listener.enterAtomExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitAtomExpr) {
			listener.exitAtomExpr(this);
		}
	}
}
export class CalClockExprContext extends ExprContext {
	public calender_clock_expr(): Calender_clock_exprContext {
		return this.getRuleContext(0, Calender_clock_exprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCalClockExpr) {
			listener.enterCalClockExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCalClockExpr) {
			listener.exitCalClockExpr(this);
		}
	}
}
export class StandAloneStatementsContext extends ExprContext {
	public stand_alone_expr(): Stand_alone_exprContext {
		return this.getRuleContext(0, Stand_alone_exprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterStandAloneStatements) {
			listener.enterStandAloneStatements(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitStandAloneStatements) {
			listener.exitStandAloneStatements(this);
		}
	}
}
export class DbParamInitializationContext extends ExprContext {
	public db_param(): Db_paramContext {
		return this.getRuleContext(0, Db_paramContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDbParamInitialization) {
			listener.enterDbParamInitialization(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDbParamInitialization) {
			listener.exitDbParamInitialization(this);
		}
	}
}
export class CriteriaInitializationContext extends ExprContext {
	public criteria(): CriteriaContext {
		return this.getRuleContext(0, CriteriaContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCriteriaInitialization) {
			listener.enterCriteriaInitialization(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCriteriaInitialization) {
			listener.exitCriteriaInitialization(this);
		}
	}
}


export class Stand_alone_exprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_stand_alone_expr; }
	public copyFrom(ctx: Stand_alone_exprContext): void {
		super.copyFrom(ctx);
	}
}
export class Recursive_exprContext extends Stand_alone_exprContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public recursive_expression(): Recursive_expressionContext[];
	public recursive_expression(i: number): Recursive_expressionContext;
	public recursive_expression(i?: number): Recursive_expressionContext | Recursive_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Recursive_expressionContext);
		} else {
			return this.getRuleContext(i, Recursive_expressionContext);
		}
	}
	constructor(ctx: Stand_alone_exprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterRecursive_expr) {
			listener.enterRecursive_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitRecursive_expr) {
			listener.exitRecursive_expr(this);
		}
	}
}


export class Calender_clock_exprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_calender_clock_expr; }
	public copyFrom(ctx: Calender_clock_exprContext): void {
		super.copyFrom(ctx);
	}
}
export class CalenderExprContext extends Calender_clock_exprContext {
	public calender_var(): Calender_varContext {
		return this.getRuleContext(0, Calender_varContext);
	}
	constructor(ctx: Calender_clock_exprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCalenderExpr) {
			listener.enterCalenderExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCalenderExpr) {
			listener.exitCalenderExpr(this);
		}
	}
}
export class ClockExprContext extends Calender_clock_exprContext {
	public clock_var(): Clock_varContext {
		return this.getRuleContext(0, Clock_varContext);
	}
	constructor(ctx: Calender_clock_exprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterClockExpr) {
			listener.enterClockExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitClockExpr) {
			listener.exitClockExpr(this);
		}
	}
}


export class Calender_varContext extends ParserRuleContext {
	public VAR(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.VAR, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_calender_var; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCalender_var) {
			listener.enterCalender_var(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCalender_var) {
			listener.exitCalender_var(this);
		}
	}
}


export class Clock_varContext extends ParserRuleContext {
	public VAR(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.VAR, 0); }
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.INT);
		} else {
			return this.getToken(ScriptGrammarParser.INT, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_clock_var; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterClock_var) {
			listener.enterClock_var(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitClock_var) {
			listener.exitClock_var(this);
		}
	}
}


export class Recursive_expressionContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.DOT, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.VAR, 0); }
	public OPEN_PARANTHESIS(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public CLOSE_PARANTHESIS(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.OPEN_BRACKET, 0); }
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_recursive_expression; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterRecursive_expression) {
			listener.enterRecursive_expression(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitRecursive_expression) {
			listener.exitRecursive_expression(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_atom; }
	public copyFrom(ctx: AtomContext): void {
		super.copyFrom(ctx);
	}
}
export class ParanthesisExprContext extends AtomContext {
	public OPEN_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLOSE_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterParanthesisExpr) {
			listener.enterParanthesisExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitParanthesisExpr) {
			listener.exitParanthesisExpr(this);
		}
	}
}
export class NumberAtomContext extends AtomContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.FLOAT, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterNumberAtom) {
			listener.enterNumberAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitNumberAtom) {
			listener.exitNumberAtom(this);
		}
	}
}
export class BooleanAtomContext extends AtomContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.FALSE, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterBooleanAtom) {
			listener.enterBooleanAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitBooleanAtom) {
			listener.exitBooleanAtom(this);
		}
	}
}
export class StringAtomContext extends AtomContext {
	public STRING(): TerminalNode { return this.getToken(ScriptGrammarParser.STRING, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterStringAtom) {
			listener.enterStringAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitStringAtom) {
			listener.exitStringAtom(this);
		}
	}
}
export class NullAtomContext extends AtomContext {
	public NULL(): TerminalNode { return this.getToken(ScriptGrammarParser.NULL, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterNullAtom) {
			listener.enterNullAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitNullAtom) {
			listener.exitNullAtom(this);
		}
	}
}
export class VarAtomContext extends AtomContext {
	public VAR(): TerminalNode { return this.getToken(ScriptGrammarParser.VAR, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterVarAtom) {
			listener.enterVarAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitVarAtom) {
			listener.exitVarAtom(this);
		}
	}
}
export class NewKeywordIntitializationContext extends AtomContext {
	public VAR(): TerminalNode { return this.getToken(ScriptGrammarParser.VAR, 0); }
	public OPEN_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public CLOSE_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterNewKeywordIntitialization) {
			listener.enterNewKeywordIntitialization(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitNewKeywordIntitialization) {
			listener.exitNewKeywordIntitialization(this);
		}
	}
}
export class CustomModuleInitializationContext extends AtomContext {
	public OPEN_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLOSE_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCustomModuleInitialization) {
			listener.enterCustomModuleInitialization(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCustomModuleInitialization) {
			listener.exitCustomModuleInitialization(this);
		}
	}
}
export class ReadingInitializationContext extends AtomContext {
	public OPEN_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(ScriptGrammarParser.COMMA, 0); }
	public CLOSE_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterReadingInitialization) {
			listener.enterReadingInitialization(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitReadingInitialization) {
			listener.exitReadingInitialization(this);
		}
	}
}
export class ModuleAndSystemNameSpaceInitializationContext extends AtomContext {
	public VAR(): TerminalNode { return this.getToken(ScriptGrammarParser.VAR, 0); }
	public OPEN_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public CLOSE_PARANTHESIS(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterModuleAndSystemNameSpaceInitialization) {
			listener.enterModuleAndSystemNameSpaceInitialization(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitModuleAndSystemNameSpaceInitialization) {
			listener.exitModuleAndSystemNameSpaceInitialization(this);
		}
	}
}
export class ListOppContext extends AtomContext {
	public list_opperations(): List_opperationsContext {
		return this.getRuleContext(0, List_opperationsContext);
	}
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterListOpp) {
			listener.enterListOpp(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitListOpp) {
			listener.exitListOpp(this);
		}
	}
}
export class MapOppsContext extends AtomContext {
	public map_opperations(): Map_opperationsContext {
		return this.getRuleContext(0, Map_opperationsContext);
	}
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterMapOpps) {
			listener.enterMapOpps(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitMapOpps) {
			listener.exitMapOpps(this);
		}
	}
}


export class List_opperationsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_list_opperations; }
	public copyFrom(ctx: List_opperationsContext): void {
		super.copyFrom(ctx);
	}
}
export class ListInitialisationContext extends List_opperationsContext {
	public OPEN_BRACKET(): TerminalNode[];
	public OPEN_BRACKET(i: number): TerminalNode;
	public OPEN_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.OPEN_BRACKET);
		} else {
			return this.getToken(ScriptGrammarParser.OPEN_BRACKET, i);
		}
	}
	public CLOSE_BRACKET(): TerminalNode[];
	public CLOSE_BRACKET(i: number): TerminalNode;
	public CLOSE_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.CLOSE_BRACKET);
		} else {
			return this.getToken(ScriptGrammarParser.CLOSE_BRACKET, i);
		}
	}
	constructor(ctx: List_opperationsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterListInitialisation) {
			listener.enterListInitialisation(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitListInitialisation) {
			listener.exitListInitialisation(this);
		}
	}
}
export class ListInitialisationWithElementsContext extends List_opperationsContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_BRACKET, 0); }
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(ctx: List_opperationsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterListInitialisationWithElements) {
			listener.enterListInitialisationWithElements(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitListInitialisationWithElements) {
			listener.exitListInitialisationWithElements(this);
		}
	}
}


export class Map_opperationsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_map_opperations; }
	public copyFrom(ctx: Map_opperationsContext): void {
		super.copyFrom(ctx);
	}
}
export class MapInitialisationContext extends Map_opperationsContext {
	public OPEN_BRACE(): TerminalNode[];
	public OPEN_BRACE(i: number): TerminalNode;
	public OPEN_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.OPEN_BRACE);
		} else {
			return this.getToken(ScriptGrammarParser.OPEN_BRACE, i);
		}
	}
	public CLOSE_BRACE(): TerminalNode[];
	public CLOSE_BRACE(i: number): TerminalNode;
	public CLOSE_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.CLOSE_BRACE);
		} else {
			return this.getToken(ScriptGrammarParser.CLOSE_BRACE, i);
		}
	}
	constructor(ctx: Map_opperationsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterMapInitialisation) {
			listener.enterMapInitialisation(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitMapInitialisation) {
			listener.exitMapInitialisation(this);
		}
	}
}


export class Db_paramContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_BRACE, 0); }
	public db_param_criteria(): Db_param_criteriaContext {
		return this.getRuleContext(0, Db_param_criteriaContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_BRACE, 0); }
	public db_param_group(): Db_param_groupContext[];
	public db_param_group(i: number): Db_param_groupContext;
	public db_param_group(i?: number): Db_param_groupContext | Db_param_groupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Db_param_groupContext);
		} else {
			return this.getRuleContext(i, Db_param_groupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param) {
			listener.enterDb_param(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param) {
			listener.exitDb_param(this);
		}
	}
}


export class Db_param_groupContext extends ParserRuleContext {
	public db_param_field(): Db_param_fieldContext | undefined {
		return this.tryGetRuleContext(0, Db_param_fieldContext);
	}
	public db_param_field_criteria(): Db_param_field_criteriaContext | undefined {
		return this.tryGetRuleContext(0, Db_param_field_criteriaContext);
	}
	public db_param_aggr(): Db_param_aggrContext | undefined {
		return this.tryGetRuleContext(0, Db_param_aggrContext);
	}
	public db_param_limit(): Db_param_limitContext | undefined {
		return this.tryGetRuleContext(0, Db_param_limitContext);
	}
	public db_param_range(): Db_param_rangeContext | undefined {
		return this.tryGetRuleContext(0, Db_param_rangeContext);
	}
	public db_param_group_by(): Db_param_group_byContext | undefined {
		return this.tryGetRuleContext(0, Db_param_group_byContext);
	}
	public db_param_sort(): Db_param_sortContext | undefined {
		return this.tryGetRuleContext(0, Db_param_sortContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param_group; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param_group) {
			listener.enterDb_param_group(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param_group) {
			listener.exitDb_param_group(this);
		}
	}
}


export class Db_param_criteriaContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ScriptGrammarParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param_criteria; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param_criteria) {
			listener.enterDb_param_criteria(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param_criteria) {
			listener.exitDb_param_criteria(this);
		}
	}
}


export class Db_param_field_criteriaContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ScriptGrammarParser.COLON, 0); }
	public criteria(): CriteriaContext {
		return this.getRuleContext(0, CriteriaContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param_field_criteria; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param_field_criteria) {
			listener.enterDb_param_field_criteria(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param_field_criteria) {
			listener.exitDb_param_field_criteria(this);
		}
	}
}


export class Db_param_fieldContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ScriptGrammarParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param_field; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param_field) {
			listener.enterDb_param_field(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param_field) {
			listener.exitDb_param_field(this);
		}
	}
}


export class Db_param_aggrContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ScriptGrammarParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param_aggr; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param_aggr) {
			listener.enterDb_param_aggr(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param_aggr) {
			listener.exitDb_param_aggr(this);
		}
	}
}


export class Db_param_limitContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ScriptGrammarParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param_limit; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param_limit) {
			listener.enterDb_param_limit(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param_limit) {
			listener.exitDb_param_limit(this);
		}
	}
}


export class Db_param_rangeContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ScriptGrammarParser.COLON, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param_range; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param_range) {
			listener.enterDb_param_range(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param_range) {
			listener.exitDb_param_range(this);
		}
	}
}


export class Db_param_group_byContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ScriptGrammarParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param_group_by; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param_group_by) {
			listener.enterDb_param_group_by(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param_group_by) {
			listener.exitDb_param_group_by(this);
		}
	}
}


export class Db_param_sortContext extends ParserRuleContext {
	public _op!: Token;
	public COLON(): TerminalNode { return this.getToken(ScriptGrammarParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScriptGrammarParser.COMMA);
		} else {
			return this.getToken(ScriptGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_db_param_sort; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterDb_param_sort) {
			listener.enterDb_param_sort(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitDb_param_sort) {
			listener.exitDb_param_sort(this);
		}
	}
}


export class CriteriaContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(ScriptGrammarParser.OPEN_BRACKET, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(ScriptGrammarParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_criteria; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCriteria) {
			listener.enterCriteria(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCriteria) {
			listener.exitCriteria(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public _op!: Token;
	public condition_atom(): Condition_atomContext | undefined {
		return this.tryGetRuleContext(0, Condition_atomContext);
	}
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.OR, 0); }
	public OPEN_PARANTHESIS(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.OPEN_PARANTHESIS, 0); }
	public CLOSE_PARANTHESIS(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.CLOSE_PARANTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_condition; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class Condition_atomContext extends ParserRuleContext {
	public _op!: Token;
	public VAR(): TerminalNode { return this.getToken(ScriptGrammarParser.VAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LTEQ(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.LTEQ, 0); }
	public GTEQ(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.GTEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.GT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.NEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_condition_atom; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterCondition_atom) {
			listener.enterCondition_atom(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitCondition_atom) {
			listener.exitCondition_atom(this);
		}
	}
}


export class Data_typeContext extends ParserRuleContext {
	public _op!: Token;
	public VOID(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.VOID, 0); }
	public DATA_TYPE_STRING(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.DATA_TYPE_STRING, 0); }
	public DATA_TYPE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.DATA_TYPE_NUMBER, 0); }
	public DATA_TYPE_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.DATA_TYPE_BOOLEAN, 0); }
	public DATA_TYPE_MAP(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.DATA_TYPE_MAP, 0); }
	public DATA_TYPE_LIST(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.DATA_TYPE_LIST, 0); }
	public DATA_TYPE_CRITERIA(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.DATA_TYPE_CRITERIA, 0); }
	public DATA_TYPE_OBJECT(): TerminalNode | undefined { return this.tryGetToken(ScriptGrammarParser.DATA_TYPE_OBJECT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScriptGrammarParser.RULE_data_type; }
	// @Override
	public enterRule(listener: ScriptGrammarListener): void {
		if (listener.enterData_type) {
			listener.enterData_type(this);
		}
	}
	// @Override
	public exitRule(listener: ScriptGrammarListener): void {
		if (listener.exitData_type) {
			listener.exitData_type(this);
		}
	}
}


