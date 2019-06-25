webpackJsonp([5],{

/***/ 2339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _regenerator=__webpack_require__(10);var _regenerator2=_interopRequireDefault(_regenerator);var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _i18n=__webpack_require__(13);var _tron=__webpack_require__(222);var _axios=__webpack_require__(30);var _axios2=_interopRequireDefault(_axios);var _reactIntl=__webpack_require__(11);var _reactRouterDom=__webpack_require__(28);var _Price=__webpack_require__(40);var _Switch=__webpack_require__(463);var _FreezeBalanceModal=__webpack_require__(2933);var _FreezeBalanceModal2=_interopRequireDefault(_FreezeBalanceModal);var _Links=__webpack_require__(23);var _reactBootstrapSweetalert=__webpack_require__(83);var _reactBootstrapSweetalert2=_interopRequireDefault(_reactBootstrapSweetalert);var _constants=__webpack_require__(22);var _api=__webpack_require__(14);var _ApplyForDelegate=__webpack_require__(2934);var _ApplyForDelegate2=_interopRequireDefault(_ApplyForDelegate);var _lodash=__webpack_require__(17);var _lodash2=_interopRequireDefault(_lodash);var _reactstrap=__webpack_require__(60);var _QRImageCode=__webpack_require__(2936);var _QRImageCode2=_interopRequireDefault(_QRImageCode);var _ChangeNameModal=__webpack_require__(2937);var _ChangeNameModal2=_interopRequireDefault(_ChangeNameModal);var _CreateTxnPairModal=__webpack_require__(2938);var _CreateTxnPairModal2=_interopRequireDefault(_CreateTxnPairModal);var _OperateTxnPairModal=__webpack_require__(2939);var _OperateTxnPairModal2=_interopRequireDefault(_OperateTxnPairModal);var _dateFns=__webpack_require__(1056);var _TestNetRequest=__webpack_require__(2940);var _TestNetRequest2=_interopRequireDefault(_TestNetRequest);var _Transactions=__webpack_require__(462);var _Transactions2=_interopRequireDefault(_Transactions);var _crypto=__webpack_require__(98);var _QuestionMark=__webpack_require__(66);var _lockr=__webpack_require__(54);var _lockr2=_interopRequireDefault(_lockr);var _tronWeb4=__webpack_require__(185);var _app=__webpack_require__(82);var _account=__webpack_require__(186);var _wallet=__webpack_require__(223);var _reactRedux=__webpack_require__(19);var _reactCopyToClipboard=__webpack_require__(232);var _qrcode=__webpack_require__(304);var _qrcode2=_interopRequireDefault(_qrcode);var _bytes=__webpack_require__(153);var _number=__webpack_require__(127);var _url=__webpack_require__(226);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Account=(_dec=(0,_reactRedux.connect)(function(state){return{account:state.app.account,walletType:state.app.wallet,tokenBalances:state.account.tokens,tokens20:state.account.tokens20,totalTransactions:state.account.totalTransactions,frozen:state.account.frozen,accountResource:state.account.accountResource,delegated:state.account.delegated,wallet:state.wallet,currentWallet:state.wallet.current,trxBalance:state.account.trxBalance};},{login:_app.login,loadRecentTransactions:_account.loadRecentTransactions,reloadWallet:_wallet.reloadWallet}),_dec(_class=(0,_reactIntl.injectIntl)(_class=(0,_tronWeb4.withTronWeb)(_class=function(_Component){_inherits(Account,_Component);function Account(){var _this2=this;_classCallCheck(this,Account);var _this=_possibleConstructorReturn(this,(Account.__proto__||Object.getPrototypeOf(Account)).call(this));_this.scrollToAnchor=function(){var anchorElement=document.getElementById('tronPower');if(anchorElement){anchorElement.scrollIntoView();}};_this.loadAccount=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee(){var _this$props,account,loadRecentTransactions,currentWallet,sr;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$props=_this.props,account=_this$props.account,loadRecentTransactions=_this$props.loadRecentTransactions,currentWallet=_this$props.currentWallet;loadRecentTransactions(account.address);_this.setState({issuedAsset:null,sr:null});if(!(currentWallet&&currentWallet.representative.enabled)){_context.next=8;break;}_context.next=6;return _api.Client.getSuperRepresentative(currentWallet.address);case 6:sr=_context.sent;_this.setState({sr:sr});case 8:_api.Client.getIssuedAsset(account.address).then(function(_ref2){var token=_ref2.token;_this.setState({issuedAsset:token});});// if (currentWallet && currentWallet.allowExchange.length) {
//     let {data,total} = await Client.getExchangesList({'address':currentWallet.address});
//     this.setState({
//         exchangesList: data,
//     });
//
// }
case 9:case"end":return _context.stop();}}},_callee,_this2);}));_this.reloadTokens=function(){_this.props.reloadWallet();};_this.onInputChange=function(value){var account=_this.props.account;if(value&&value.length===64){_this.privateKey.className="form-control";if((0,_crypto.pkToAddress)(value)!==account.address)_this.privateKey.className="form-control is-invalid";}else{_this.privateKey.className="form-control is-invalid";}_this.setState({privateKey:value});_this.privateKey.value=value;};_this.confirmPrivateKey=function(param){var privateKey=_this.state.privateKey;var account=_this.props.account;var confirm=null;if(param==='freeze')confirm=_this.showFreezeBalance;if(param==='unfreeze')confirm=_this.showUnfreezeModal;if(param==='applySR')confirm=_this.applyForDelegate;if(param==='claimRewards')confirm=_this.claimRewards;if(param==='unfreezeAssetsConfirmation')confirm=_this.unfreezeAssetsConfirmation;if(param==='changeName')confirm=_this.changeName;if(param==='changeWebsite')confirm=_this.changeWebsite;if(param==='changeGithubURL')confirm=_this.changeGithubURL;var reConfirm=function reConfirm(){if(_this.privateKey.value&&_this.privateKey.value.length===64){if((0,_crypto.pkToAddress)(_this.privateKey.value)===account.address)confirm();}};_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{info:true,showCancel:true,cancelBtnText:(0,_i18n.tu)("cancel"),confirmBtnText:(0,_i18n.tu)("confirm"),confirmBtnBsStyle:"success",cancelBtnBsStyle:"default",title:(0,_i18n.tu)("confirm_private_key"),onConfirm:reConfirm,onCancel:_this.hideModal,style:{marginLeft:'-240px',marginTop:'-195px'}},_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("div",{className:"input-group mb-3"},_react2.default.createElement("input",{type:"text",ref:function ref(_ref3){return _this.privateKey=_ref3;},onChange:function onChange(ev){_this.onInputChange(ev.target.value);},className:"form-control is-invalid"}),_react2.default.createElement("div",{className:"invalid-feedback"},(0,_i18n.tu)("fill_a_valid_private_key")))))});};_this.showFreezeBalance=function(){var privateKey=_this.state.privateKey;var _this$props2=_this.props,trxBalance=_this$props2.trxBalance,currentWallet=_this$props2.currentWallet;if(trxBalance===0){_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,title:(0,_i18n.tu)("not_enough_trx"),onConfirm:_this.hideModal},(0,_i18n.tu)("freeze_trx_least"))});return;}_this.setState({modal:_react2.default.createElement(_FreezeBalanceModal2.default,{frozenTrx:currentWallet.frozenTrx,privateKey:privateKey,onHide:_this.hideModal,onError:function onError(){_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,title:(0,_i18n.tu)("Error"),onConfirm:_this.hideModal},"Something went wrong while trying to freeze TRX")});},onConfirm:function onConfirm(_ref4){var amount=_ref4.amount;return _this.showFreezeConfirmation(amount);}})});};_this.resourceSelectChange=function(value){_this.setState({selectedResource:Number(value)});};_this.hideModal=function(){_this.setState({modal:null});};_this.hideFreezeModal=function(){_this.setState({modal:null,selectedResource:null});};_this.showUnfreezeModal=function(){var _ref5=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee2(delegateType,delegate,delegateValue){var _this$state,privateKey,selectedResource,resources,intl;return _regenerator2.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_this.setState({delegateType:delegateType,delegate:delegate,delegateValue:delegateValue});_this$state=_this.state,privateKey=_this$state.privateKey,selectedResource=_this$state.selectedResource,resources=_this$state.resources;intl=_this.props.intl;_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{info:true,showCancel:true,confirmBtnText:(0,_i18n.tu)("unfreeze"),confirmBtnBsStyle:"danger",cancelBtnBsStyle:"default",cancelBtnText:(0,_i18n.tu)("cancel"),title:(0,_i18n.tu)("unfreeze_trx_confirm_message"),onConfirm:_this.unfreeze,onCancel:_this.hideFreezeModal,style:{height:'300px'}},_react2.default.createElement("div",{className:"form-group",style:{marginBottom:'36px'}},_react2.default.createElement("div",{className:"mt-3 mb-2 text-left",style:{color:'#666'}})))});case 4:case"end":return _context2.stop();}}},_callee2,_this2);}));return function(_x,_x2,_x3){return _ref5.apply(this,arguments);};}();_this.unfreezeAssetsConfirmation=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee3(){return _regenerator2.default.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{info:true,showCancel:true,confirmBtnText:(0,_i18n.tu)("unfreeze_assets"),confirmBtnBsStyle:"danger",cancelBtnBsStyle:"default",cancelBtnText:(0,_i18n.tu)("cancel"),title:(0,_i18n.tu)("sure_to_unfreeze_unlocked_tokens_message"),onConfirm:_this.unfreezeAssets,onCancel:_this.hideModal})});case 1:case"end":return _context3.stop();}}},_callee3,_this2);}));_this.claimRewards=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee4(){var res,_this$props3,account,currentWallet,tronWeb,unSignTransaction,_ref8,result,_ref9,success,code;return _regenerator2.default.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:res=void 0;_this$props3=_this.props,account=_this$props3.account,currentWallet=_this$props3.currentWallet;if(!(_this.state.isTronLink===1)){_context4.next=15;break;}tronWeb=void 0;if(_this.props.walletType.type==="ACCOUNT_LEDGER"){tronWeb=_this.props.tronWeb();}else if(_this.props.walletType.type==="ACCOUNT_TRONLINK"){tronWeb=account.tronWeb;}_context4.next=7;return tronWeb.transactionBuilder.withdrawBlockRewards(tronWeb.defaultAddress.base58).catch(function(e){return false;});case 7:unSignTransaction=_context4.sent;_context4.next=10;return(0,_tron.transactionResultManager)(unSignTransaction,tronWeb);case 10:_ref8=_context4.sent;result=_ref8.result;res=result;_context4.next=21;break;case 15:_context4.next=17;return _api.Client.withdrawBalance(currentWallet.address)(account.key);case 17:_ref9=_context4.sent;success=_ref9.success;code=_ref9.code;res=success;case 21:if(res){_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,title:(0,_i18n.tu)("rewards_claimed"),onConfirm:_this.hideModal},(0,_i18n.tu)("successfully_claimed_rewards"))});}else{_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{danger:true,title:(0,_i18n.tu)("could_not_claim_rewards"),onConfirm:_this.hideModal},(0,_i18n.tu)("claim_rewards_error_message"))});}case 22:case"end":return _context4.stop();}}},_callee4,_this2);}));_this.unfreeze=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee5(){var _this$state2,delegateType,delegate,delegateValue,_this$props4,account,walletType,privateKey,res,tronWebLedger,tronWeb,unSignTransaction,_ref11,result,_unSignTransaction,_ref12,_result,_ref13,success,_ref14,_success;return _regenerator2.default.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_this$state2=_this.state,delegateType=_this$state2.delegateType,delegate=_this$state2.delegate,delegateValue=_this$state2.delegateValue;_this$props4=_this.props,account=_this$props4.account,walletType=_this$props4.walletType;privateKey=_this.state.privateKey;res=void 0;_this.hideModal();if(!(_lockr2.default.get("islogin")||_this.props.walletType.type==="ACCOUNT_LEDGER"||_this.props.walletType.type==="ACCOUNT_TRONLINK")){_context5.next=49;break;}tronWebLedger=_this.props.tronWeb();tronWeb=_this.props.account.tronWeb;if(!delegateType){delegateType='BANDWIDTH';}else{delegateType='ENERGY';}_context5.prev=9;if(!(_this.props.walletType.type==="ACCOUNT_LEDGER")){_context5.next=26;break;}unSignTransaction=void 0;if(delegate){_context5.next=18;break;}_context5.next=15;return tronWebLedger.transactionBuilder.unfreezeBalance(delegateType,walletType.address).catch(function(e){return false;});case 15:unSignTransaction=_context5.sent;_context5.next=21;break;case 18:_context5.next=20;return tronWebLedger.transactionBuilder.unfreezeBalance(delegateType,walletType.address,delegateValue).catch(function(e){return false;});case 20:unSignTransaction=_context5.sent;case 21:_context5.next=23;return(0,_tron.transactionResultManager)(unSignTransaction,tronWebLedger);case 23:_ref11=_context5.sent;result=_ref11.result;res=result;case 26:if(!(_this.props.walletType.type==="ACCOUNT_TRONLINK")){_context5.next=42;break;}_unSignTransaction=void 0;if(delegate){_context5.next=34;break;}_context5.next=31;return tronWeb.transactionBuilder.unfreezeBalance(delegateType,tronWeb.defaultAddress.base58).catch(function(e){return false;});case 31:_unSignTransaction=_context5.sent;_context5.next=37;break;case 34:_context5.next=36;return tronWeb.transactionBuilder.unfreezeBalance(delegateType,tronWeb.defaultAddress.base58,delegateValue).catch(function(e){return false;});case 36:_unSignTransaction=_context5.sent;case 37:_context5.next=39;return(0,_tron.transactionResultManager)(_unSignTransaction,tronWeb);case 39:_ref12=_context5.sent;_result=_ref12.result;res=_result;case 42:_context5.next=47;break;case 44:_context5.prev=44;_context5.t0=_context5["catch"](9);console.log(_context5.t0);case 47:_context5.next=62;break;case 49:if(delegate){_context5.next=57;break;}_context5.next=52;return _api.Client.unfreezeBalance(account.address,delegateType,'')(account.key);case 52:_ref13=_context5.sent;success=_ref13.success;res=success;_context5.next=62;break;case 57:_context5.next=59;return _api.Client.unfreezeBalance(account.address,delegateType,delegateValue)(account.key);case 59:_ref14=_context5.sent;_success=_ref14.success;res=_success;case 62:if(res){_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,title:"TRX Unfrozen",onConfirm:_this.hideFreezeModal},(0,_i18n.tu)("success_unfrozen_trx"))});setTimeout(function(){return _this.reloadTokens();},1200);}else{_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,title:(0,_i18n.tu)("unable_to_unfreeze"),onConfirm:_this.hideFreezeModal},(0,_i18n.tu)("unable_unfreeze_trx_message"))});}case 63:case"end":return _context5.stop();}}},_callee5,_this2,[[9,44]]);}));_this.unfreezeAssets=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee6(){var account,privateKey,res,tronWeb,unSignTransaction,_ref16,result,_ref17,success;return _regenerator2.default.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:account=_this.props.account;privateKey=_this.state.privateKey;res=void 0;_this.hideModal();if(!(_this.state.isTronLink===1)){_context6.next=17;break;}tronWeb=void 0;if(_this.props.walletType.type==="ACCOUNT_LEDGER"){tronWeb=_this.props.tronWeb();}else if(_this.props.walletType.type==="ACCOUNT_TRONLINK"){tronWeb=account.tronWeb;}_context6.next=9;return tronWeb.fullNode.request('wallet/unfreezeasset',{owner_address:tronWeb.defaultAddress.hex},'post').catch(function(e){return false;});case 9:unSignTransaction=_context6.sent;_context6.next=12;return(0,_tron.transactionResultManager)(unSignTransaction,tronWeb);case 12:_ref16=_context6.sent;result=_ref16.result;res=result;_context6.next=22;break;case 17:_context6.next=19;return _api.Client.unfreezeAssets(account.address)(account.key);case 19:_ref17=_context6.sent;success=_ref17.success;res=success;case 22:if(res){_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,title:(0,_i18n.tu)("tokens_unfrozen"),onConfirm:_this.hideModal},(0,_i18n.tu)("success_tokens_unfrozen_message"))});setTimeout(function(){return _this.loadAccount();},1200);setTimeout(function(){return _this.props.reloadWallet();},1200);}else{_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,title:(0,_i18n.tu)("unable_to_unfreeze"),onConfirm:_this.hideModal},(0,_i18n.tu)("Unable_tokens_unfrozen_message"))});}case 23:case"end":return _context6.stop();}}},_callee6,_this2);}));_this.showFreezeConfirmation=function(amount){_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,title:(0,_i18n.tu)("tokens_frozen"),onConfirm:_this.hideModal},(0,_i18n.tu)("successfully_frozen")," ",amount," TRX")});setTimeout(function(){return _this.props.reloadWallet();},1000);};_this.updateName=function(){var _ref18=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee7(name){var res,_this$props5,account,currentWallet,onError,tronWebLedger,unSignTransaction,_ref19,result,tronWeb,_unSignTransaction2,_ref20,_result2,_ref21,success;return _regenerator2.default.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:res=void 0;_this$props5=_this.props,account=_this$props5.account,currentWallet=_this$props5.currentWallet,onError=_this$props5.onError;_context7.prev=2;if(!(_this.props.walletType.type==="ACCOUNT_LEDGER")){_context7.next=15;break;}tronWebLedger=_this.props.tronWeb();_context7.next=7;return tronWebLedger.transactionBuilder.updateAccount(name,_this.props.walletType.address);case 7:unSignTransaction=_context7.sent;_context7.next=10;return(0,_tron.transactionResultManager)(unSignTransaction,tronWebLedger);case 10:_ref19=_context7.sent;result=_ref19.result;res=result;_context7.next=32;break;case 15:if(!(_this.props.walletType.type==="ACCOUNT_TRONLINK")){_context7.next=27;break;}tronWeb=account.tronWeb;_context7.next=19;return tronWeb.fullNode.request('wallet/updateaccount',{account_name:tronWeb.fromUtf8(name),owner_address:tronWeb.defaultAddress.hex},'post').catch(function(e){return false;});case 19:_unSignTransaction2=_context7.sent;_context7.next=22;return(0,_tron.transactionResultManager)(_unSignTransaction2,tronWeb);case 22:_ref20=_context7.sent;_result2=_ref20.result;res=_result2;_context7.next=32;break;case 27:_context7.next=29;return _api.Client.updateAccountName(currentWallet.address,name)(account.key);case 29:_ref21=_context7.sent;success=_ref21.success;res=success;case 32:_context7.next=38;break;case 34:_context7.prev=34;_context7.t0=_context7["catch"](2);console.error(_context7.t0);onError&&onError();case 38:if(res){_this.setState({temporaryName:name,modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,title:(0,_i18n.tu)("name_changed"),onConfirm:_this.hideModal},(0,_i18n.tu)("successfully_changed_name_to_message")," ",_react2.default.createElement("b",null,name))});setTimeout(function(){return _this.props.reloadWallet();},1000);}else{_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,title:(0,_i18n.tu)("unable_to_rename_title"),onConfirm:_this.hideModal},(0,_i18n.tu)("unable_to_rename_message"))});}case 39:case"end":return _context7.stop();}}},_callee7,_this2,[[2,34]]);}));return function(_x4){return _ref18.apply(this,arguments);};}();_this.updateWebsite=function(){var _ref22=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee8(url){var res,_this$props6,account,currentWallet,tronWeb,unSignTransaction,_ref23,result,_ref24,success;return _regenerator2.default.wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:res=void 0;_this$props6=_this.props,account=_this$props6.account,currentWallet=_this$props6.currentWallet;if(!(_this.state.isTronLink===1)){_context8.next=15;break;}tronWeb=void 0;if(_this.props.walletType.type==="ACCOUNT_LEDGER"){tronWeb=_this.props.tronWeb();}else if(_this.props.walletType.type==="ACCOUNT_TRONLINK"){tronWeb=account.tronWeb;}_context8.next=7;return tronWeb.fullNode.request('wallet/updatewitness',{update_url:tronWeb.fromUtf8(url),owner_address:tronWeb.defaultAddress.hex},'post');case 7:unSignTransaction=_context8.sent;_context8.next=10;return(0,_tron.transactionResultManager)(unSignTransaction,tronWeb);case 10:_ref23=_context8.sent;result=_ref23.result;res=result;_context8.next=20;break;case 15:_context8.next=17;return _api.Client.updateWitnessUrl(currentWallet.address,url)(account.key);case 17:_ref24=_context8.sent;success=_ref24.success;res=success;case 20:if(res){_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,title:(0,_i18n.tu)("url_changed"),onConfirm:_this.hideModal},(0,_i18n.tu)("successfully_changed_website_message")," ",_react2.default.createElement("b",null,url))});setTimeout(function(){return _this.props.reloadWallet();},1000);}else{_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,title:(0,_i18n.tu)("unable_to_change_website_title"),onConfirm:_this.hideModal},(0,_i18n.tu)("unable_to_change_website_message"))});}case 21:case"end":return _context8.stop();}}},_callee8,_this2);}));return function(_x5){return _ref22.apply(this,arguments);};}();_this.createTxnPair=function(){var _ref25=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee9(firstTokenId,secondTokenId,firstTokenBalance,secondTokenBalance){var res,_this$props7,account,currentWallet,tronWeb,unSignTransaction,_ref26,result,_tronWeb,_unSignTransaction3,_ref27,_result3,_ref28,success;return _regenerator2.default.wrap(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:res=void 0;_this$props7=_this.props,account=_this$props7.account,currentWallet=_this$props7.currentWallet;if(!(_this.props.walletType.type==="ACCOUNT_LEDGER")){_context9.next=14;break;}tronWeb=_this.props.tronWeb();_context9.next=6;return tronWeb.transactionBuilder.createTRXExchange(firstTokenId,firstTokenBalance,secondTokenBalance,currentWallet.address).catch(function(e){return false;});case 6:unSignTransaction=_context9.sent;_context9.next=9;return(0,_tron.transactionResultManager)(unSignTransaction,tronWeb);case 9:_ref26=_context9.sent;result=_ref26.result;res=result;_context9.next=31;break;case 14:if(!(_this.props.walletType.type==="ACCOUNT_TRONLINK")){_context9.next=26;break;}_tronWeb=account.tronWeb;_context9.next=18;return _tronWeb.transactionBuilder.createTRXExchange(firstTokenId,firstTokenBalance,secondTokenBalance,_tronWeb.defaultAddress.hex).catch(function(e){return false;});case 18:_unSignTransaction3=_context9.sent;_context9.next=21;return(0,_tron.transactionResultManager)(_unSignTransaction3,_tronWeb);case 21:_ref27=_context9.sent;_result3=_ref27.result;res=_result3;_context9.next=31;break;case 26:_context9.next=28;return _api.Client.createExchange(currentWallet.address,firstTokenId,secondTokenId,firstTokenBalance,secondTokenBalance)(account.key);case 28:_ref28=_context9.sent;success=_ref28.success;res=success;case 31:if(res){_this.setState({temporaryName:name,modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,onConfirm:_this.hideModal},(0,_i18n.tu)("successfully_created_pair"))});setTimeout(function(){return _this.props.reloadWallet();},1000);}else{_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,onConfirm:_this.hideModal},(0,_i18n.tu)("pair_creation_failed"))});}case 32:case"end":return _context9.stop();}}},_callee9,_this2);}));return function(_x6,_x7,_x8,_x9){return _ref25.apply(this,arguments);};}();_this.injectExchange=function(){var _ref29=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee10(exchangeId,tokenId,quant){var res,_this$props8,account,currentWallet,tronWeb,unSignTransaction,_ref30,result,_tronWeb2,_unSignTransaction4,_ref31,_result4,_ref32,success;return _regenerator2.default.wrap(function _callee10$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:res=void 0;_this$props8=_this.props,account=_this$props8.account,currentWallet=_this$props8.currentWallet;if(!(_this.props.walletType.type==="ACCOUNT_LEDGER")){_context10.next=14;break;}tronWeb=_this.props.tronWeb();_context10.next=6;return tronWeb.transactionBuilder.injectExchangeTokens(exchangeId,tokenId,quant,currentWallet.address).catch(function(e){return false;});case 6:unSignTransaction=_context10.sent;_context10.next=9;return(0,_tron.transactionResultManager)(unSignTransaction,tronWeb);case 9:_ref30=_context10.sent;result=_ref30.result;res=result;_context10.next=31;break;case 14:if(!(_this.props.walletType.type==="ACCOUNT_TRONLINK")){_context10.next=26;break;}_tronWeb2=account.tronWeb;_context10.next=18;return _tronWeb2.transactionBuilder.injectExchangeTokens(exchangeId,tokenId,quant,_tronWeb2.defaultAddress.hex).catch(function(e){return false;});case 18:_unSignTransaction4=_context10.sent;_context10.next=21;return(0,_tron.transactionResultManager)(_unSignTransaction4,_tronWeb2);case 21:_ref31=_context10.sent;_result4=_ref31.result;res=_result4;_context10.next=31;break;case 26:_context10.next=28;return _api.Client.injectExchange(currentWallet.address,exchangeId,tokenId,quant)(account.key);case 28:_ref32=_context10.sent;success=_ref32.success;res=success;case 31:if(res){_this.setState({temporaryName:name,modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,onConfirm:_this.hideModal},(0,_i18n.tu)("successful_injection"))});setTimeout(function(){return _this.props.reloadWallet();},5000);}else{_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,onConfirm:_this.hideModal},(0,_i18n.tu)("sorry_injection_failed"))});}case 32:case"end":return _context10.stop();}}},_callee10,_this2);}));return function(_x10,_x11,_x12){return _ref29.apply(this,arguments);};}();_this.withdrawExchange=function(){var _ref33=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee11(exchangeId,tokenId,quant){var res,_this$props9,account,currentWallet,tronWeb,unSignTransaction,_ref34,result,_tronWeb3,_unSignTransaction5,_ref35,_result5,_ref36,success;return _regenerator2.default.wrap(function _callee11$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:res=void 0;_this$props9=_this.props,account=_this$props9.account,currentWallet=_this$props9.currentWallet;if(!(_this.props.walletType.type==="ACCOUNT_LEDGER")){_context11.next=14;break;}tronWeb=_this.props.tronWeb();_context11.next=6;return tronWeb.transactionBuilder.withdrawExchangeTokens(exchangeId,tokenId,quant,currentWallet.address).catch(function(e){return false;});case 6:unSignTransaction=_context11.sent;_context11.next=9;return(0,_tron.transactionResultManager)(unSignTransaction,tronWeb);case 9:_ref34=_context11.sent;result=_ref34.result;res=result;_context11.next=31;break;case 14:if(!(_this.props.walletType.type==="ACCOUNT_TRONLINK")){_context11.next=26;break;}_tronWeb3=account.tronWeb;_context11.next=18;return _tronWeb3.transactionBuilder.withdrawExchangeTokens(exchangeId,tokenId,quant,_tronWeb3.defaultAddress.hex).catch(function(e){return false;});case 18:_unSignTransaction5=_context11.sent;_context11.next=21;return(0,_tron.transactionResultManager)(_unSignTransaction5,_tronWeb3);case 21:_ref35=_context11.sent;_result5=_ref35.result;res=_result5;_context11.next=31;break;case 26:_context11.next=28;return _api.Client.withdrawExchange(currentWallet.address,exchangeId,tokenId,quant)(account.key);case 28:_ref36=_context11.sent;success=_ref36.success;res=success;case 31:if(res){_this.setState({temporaryName:name,modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,onConfirm:_this.hideModal},(0,_i18n.tu)("successful_withdrawal"))});setTimeout(function(){return _this.props.reloadWallet();},5000);}else{_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,onConfirm:_this.hideModal},(0,_i18n.tu)("sorry_withdrawal_failed"))});}case 32:case"end":return _context11.stop();}}},_callee11,_this2);}));return function(_x13,_x14,_x15){return _ref33.apply(this,arguments);};}();_this.changeName=function(){_this.setState({modal:_react2.default.createElement(_ChangeNameModal2.default,{onConfirm:function onConfirm(name){return _this.updateName(name);},onCancel:_this.hideModal})});};_this.changeTxnPair=function(){_this.setState({modal:_react2.default.createElement(_CreateTxnPairModal2.default,{onCreate:function onCreate(firstTokenId,secondTokenId,firstTokenBalance,secondTokenBalance){return _this.createTxnPair(firstTokenId,secondTokenId,firstTokenBalance,secondTokenBalance);},onCancel:_this.hideModal,dealPairTrxLimit:_this.state.dealPairTrxLimit})});};_this.injectTxnPair=function(exchange){_this.setState({modal:_react2.default.createElement(_OperateTxnPairModal2.default,{onInject:function onInject(exchangeId,tokenId,quant){return _this.injectExchange(exchangeId,tokenId,quant);},onCancel:_this.hideModal,exchange:exchange,inject:true})});};_this.withdrawTxnPair=function(exchange){_this.setState({modal:_react2.default.createElement(_OperateTxnPairModal2.default,{onWithdraw:function onWithdraw(exchangeId,tokenId,quant){return _this.withdrawExchange(exchangeId,tokenId,quant);},onCancel:_this.hideModal,exchange:exchange,inject:false,dealPairTrxLimit:_this.state.dealPairTrxLimit})});};_this.changeGithubURL=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee13(){return _regenerator2.default.wrap(function _callee13$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:_this.setState({modal:_this.state.isTronLink===1?_react2.default.createElement(_reactBootstrapSweetalert2.default,{onCancel:_this.hideModal,onConfirm:_this.hideModal},(0,_i18n.tu)("change_login_method")):_react2.default.createElement(_reactBootstrapSweetalert2.default,{input:true,showCancel:true,cancelBtnBsStyle:"default",cancelBtnText:(0,_i18n.tu)("cancel"),confirmBtnText:(0,_i18n.tu)("link_github"),title:(0,_i18n.tu)("link_to_github"),placeHolder:"github username or https://github.com/{username}/tronsr-template",onCancel:_this.hideModal,validationMsg:(0,_i18n.tu)("you_must_enter_a_url"),onConfirm:function(){var _ref38=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee12(name){return _regenerator2.default.wrap(function _callee12$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:_context12.next=2;return _this.detectGithubUrl(name);case 2:if(!_context12.sent){_context12.next=6;break;}_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,title:(0,_i18n.tu)("github_linked"),onConfirm:_this.hideModal},(0,_i18n.tu)("successfully_linked_github"))});_context12.next=7;break;case 6:_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{danger:true,showCancel:true,title:(0,_i18n.tu)("could_not_link_github"),onCancel:_this.hideModal,onConfirm:_this.changeGithubURL},(0,_i18n.tu)("unable_to_link_github_message"))});case 7:case"end":return _context12.stop();}}},_callee12,_this2);}));return function(_x16){return _ref38.apply(this,arguments);};}()},(0,_i18n.tu)("enter_your_github_username"))});case 1:case"end":return _context13.stop();}}},_callee13,_this2);}));_this.hasGithubLink=function(){var sr=_this.state.sr;return sr&&(0,_lodash.trim)(sr.githubLink).length!==0;};_this.detectGithubUrl=function(){var _ref39=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee14(input){var urls,_iteratorNormalCompletion,_didIteratorError,_iteratorError,_iterator,_step,url;return _regenerator2.default.wrap(function _callee14$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:urls=["https://raw.githubusercontent.com/"+input+"/tronsr-template/master/logo.png","https://raw.githubusercontent.com/"+input+"/master/logo.png"];_iteratorNormalCompletion=true;_didIteratorError=false;_iteratorError=undefined;_context14.prev=4;_iterator=urls[Symbol.iterator]();case 6:if(_iteratorNormalCompletion=(_step=_iterator.next()).done){_context14.next=21;break;}url=_step.value;_context14.prev=8;_context14.next=11;return _axios2.default.get(url);case 11:_context14.next=13;return _this.updateGithubURL(input);case 13:return _context14.abrupt("return",true);case 16:_context14.prev=16;_context14.t0=_context14["catch"](8);case 18:_iteratorNormalCompletion=true;_context14.next=6;break;case 21:_context14.next=27;break;case 23:_context14.prev=23;_context14.t1=_context14["catch"](4);_didIteratorError=true;_iteratorError=_context14.t1;case 27:_context14.prev=27;_context14.prev=28;if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}case 30:_context14.prev=30;if(!_didIteratorError){_context14.next=33;break;}throw _iteratorError;case 33:return _context14.finish(30);case 34:return _context14.finish(27);case 35:return _context14.abrupt("return",false);case 36:case"end":return _context14.stop();}}},_callee14,_this2,[[4,23,27,35],[8,16],[28,,30,34]]);}));return function(_x17){return _ref39.apply(this,arguments);};}();_this.updateGithubURL=function(){var _ref40=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee15(url){var _this$props10,account,currentWallet,key,_url$split,_url$split2,name,repo,githubLink;return _regenerator2.default.wrap(function _callee15$(_context15){while(1){switch(_context15.prev=_context15.next){case 0:_this$props10=_this.props,account=_this$props10.account,currentWallet=_this$props10.currentWallet;_context15.next=3;return _api.Client.auth(account.key);case 3:key=_context15.sent;_url$split=url.split("/"),_url$split2=_slicedToArray(_url$split,2),name=_url$split2[0],repo=_url$split2[1];githubLink=name+"/"+(repo||"tronsr-template");if(!(_this.state.isTronLink===1)){_context15.next=10;break;}return _context15.abrupt("return");case 10:_context15.next=12;return _api.Client.updateSuperRepresentative(key,{address:currentWallet.address,githubLink:githubLink});case 12:_this.loadAccount();case 13:case"end":return _context15.stop();}}},_callee15,_this2);}));return function(_x18){return _ref40.apply(this,arguments);};}();_this.changeWebsite=function(){_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{input:true,showCancel:true,cancelBtnBsStyle:"default",title:(0,_i18n.tu)("change_website"),placeHolder:"https://",onCancel:_this.hideModal,validationMsg:(0,_i18n.tu)("you_must_enter_url"),onConfirm:function onConfirm(name){return _this.updateWebsite(name);}},(0,_i18n.tu)("specify_the_url"))});};_this.applyForDelegate=function(){var privateKey=_this.state.privateKey;_this.setState({modal:_react2.default.createElement(_ApplyForDelegate2.default,{isTronLink:_this.state.isTronLink,privateKey:privateKey,onCancel:_this.hideModal,onConfirm:function onConfirm(){setTimeout(function(){return _this.props.reloadWallet();},1200);_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,title:(0,_i18n.tu)("success"),onConfirm:_this.hideModal},(0,_i18n.tu)("successfully_appied_sr_canidate_message_0")," ",_react2.default.createElement("br",null),(0,_i18n.tu)("successfully_appied_sr_canidate_message_1"))});}})});};_this.showQrCode=function(){var _this$props11=_this.props,currentWallet=_this$props11.currentWallet,account=_this$props11.account;_this.setState({modal:_react2.default.createElement(_reactstrap.Modal,{className:"modal-dialog-centered animated zoomIn",fade:false,isOpen:true,toggle:_this.hideModal,style:{width:'400px'}},_react2.default.createElement(_reactstrap.ModalHeader,{toggle:_this.hideModal},"QR CODE"),_react2.default.createElement(_reactstrap.ModalBody,{className:"text-center"},_react2.default.createElement("h5",{className:"py-2"},(0,_i18n.tu)("wallet_address")),_react2.default.createElement("div",{className:"input-group mb-3"},_react2.default.createElement("input",{type:"text",readOnly:true,className:"form-control",value:account.address}),_react2.default.createElement("div",{className:"input-group-append"},_react2.default.createElement(_reactCopyToClipboard.CopyToClipboard,{text:account.address},_react2.default.createElement("button",{className:"btn btn-outline-secondary",type:"button"},_react2.default.createElement("i",{className:"fa fa-paste"}))))),_react2.default.createElement("hr",null),_react2.default.createElement(_qrcode2.default,{size:512,style:{width:'100%',height:'auto'},value:account.address}),_react2.default.createElement("br",null)))});};_this.toissuedAsset=function(){var issuedAsset=_this.state.issuedAsset;window.location.hash="#/token/"+issuedAsset.id;};_this.handleSwitch=function(val){_this.setState({hideSmallCurrency:val});};_this.handleTRC10Token=function(){_this.setState({tokenTRC10:true});};_this.handleTRC20Token=function(){_this.setState({tokenTRC10:false});};_this.state={modal:null,showFreezeBalance:false,showBuyTokens:false,sr:null,issuedAsset:null,showBandwidth:false,privateKey:"",temporaryName:"",selectedResource:null,hideSmallCurrency:false,tokenTRC10:true,tokens20:[],dealPairTrxLimit:100000,isTronLink:0,delegateType:0,delegate:false,delegateValue:''};return _this;}_createClass(Account,[{key:"componentDidMount",value:function componentDidMount(){var _this3=this;var _props=this.props,account=_props.account,match=_props.match;if(account.isLoggedIn){this.setState({isTronLink:_lockr2.default.get("islogin")});this.reloadTokens();this.loadAccount();if((0,_url.getQueryString)('from')=='tronlink'&&(0,_url.getQueryString)('type')=='frozen'){setTimeout(function(){_this3.scrollToAnchor();},3000);}}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var account=this.props.account;if(prevProps.account.isLoggedIn!==account.isLoggedIn&&account.isLoggedIn||prevProps.account.address!==account.address&&account.isLoggedIn){this.setState({isTronLink:_lockr2.default.get("islogin")});this.reloadTokens();this.loadAccount();//this.getTRC20Tokens();
}}},{key:"getTRC20Tokens",value:function(){var _ref41=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee18(){var _this4=this;var account,result,tokens20,tronWebLedger,tronWeb;return _regenerator2.default.wrap(function _callee18$(_context18){while(1){switch(_context18.prev=_context18.next){case 0:account=this.props.account;_context18.next=3;return _axios2.default.get(_constants.API_URL+"/api/token_trc20?sort=issue_time&start=0&limit=50");case 3:result=_context18.sent;tokens20=result.data.trc20_tokens;tronWebLedger=this.props.tronWeb();tronWeb=this.props.account.tronWeb;if(this.props.walletType.type==="ACCOUNT_LEDGER"){tokens20&&tokens20.map(function(){var _ref42=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee16(item){var contractInstance,balanceData;return _regenerator2.default.wrap(function _callee16$(_context16){while(1){switch(_context16.prev=_context16.next){case 0:item.token20_name=item.name+'('+item.symbol+')';_context16.next=3;return tronWebLedger.contract().at(item.contract_address);case 3:contractInstance=_context16.sent;_context16.next=6;return contractInstance.balanceOf(_this4.props.walletType.address).call();case 6:balanceData=_context16.sent;if(balanceData.balance){item.token20_balance=parseFloat(balanceData.balance.toString())/Math.pow(10,item.decimals);}else{item.token20_balance=parseFloat(balanceData.toString())/Math.pow(10,item.decimals);}return _context16.abrupt("return",item);case 9:case"end":return _context16.stop();}}},_callee16,_this4);}));return function(_x19){return _ref42.apply(this,arguments);};}());this.setState({tokens20:tokens20});}if(this.props.walletType.type==="ACCOUNT_TRONLINK"||this.props.walletType.type==="ACCOUNT_PRIVATE_KEY"){tokens20&&tokens20.map(function(){var _ref43=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee17(item){var contractInstance,balanceData;return _regenerator2.default.wrap(function _callee17$(_context17){while(1){switch(_context17.prev=_context17.next){case 0:item.token20_name=item.name+'('+item.symbol+')';_context17.next=3;return tronWeb.contract().at(item.contract_address);case 3:contractInstance=_context17.sent;_context17.next=6;return contractInstance.balanceOf(account.address).call();case 6:balanceData=_context17.sent;if(balanceData.balance){//item.token20_balance = parseFloat(balanceData.balance.toString()) / Math.pow(10, item.decimals);
item.token20_balance=(0,_number.FormatNumberByDecimals)(balanceData.balance.toString(),item.decimals);}else{item.token20_balance=(0,_number.FormatNumberByDecimals)(balanceData.toString(),item.decimals);// item.token20_balance = FormatNumberByDecimals(balanceData.toString() , item.decimals)
}return _context17.abrupt("return",item);case 9:case"end":return _context17.stop();}}},_callee17,_this4);}));return function(_x20){return _ref43.apply(this,arguments);};}());this.setState({tokens20:tokens20});}case 9:case"end":return _context18.stop();}}},_callee18,this);}));function getTRC20Tokens(){return _ref41.apply(this,arguments);}return getTRC20Tokens;}()},{key:"renderTRC20Tokens",value:function renderTRC20Tokens(){var hideSmallCurrency=this.state.hideSmallCurrency;var tokens20=this.props.tokens20;if(hideSmallCurrency){tokens20=(0,_lodash2.default)(tokens20).filter(function(tb){return tb.token20_balance_decimals>=10;}).sortBy(function(tb){return-tb.token20_balance_decimals;}).value();}else{tokens20=(0,_lodash2.default)(tokens20).filter(function(tb){return tb.token20_balance_decimals>0;}).sortBy(function(tb){return-tb.token20_balance_decimals;}).value();}// for (let token of tokens20) {
//     token.token20Balance = toThousands(token.token20_balance);
// }
if(tokens20.length===0){return _react2.default.createElement("div",{className:"text-center d-flex justify-content-center p-4"},(0,_i18n.tu)("no_tokens"));}return _react2.default.createElement("table",{className:"table mt-3 temp-table"},_react2.default.createElement("thead",{className:"thead-light"},_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("name")),_react2.default.createElement("th",{className:"text-right"},(0,_i18n.tu)("balance")))),_react2.default.createElement("tbody",null,tokens20.map(function(token){return _react2.default.createElement("tr",{key:token.token20_name},_react2.default.createElement("td",{className:"text-nowrap"},token.contract_address==_constants.CONTRACT_ADDRESS_USDT?_react2.default.createElement("div",{className:"map-token-top"},_react2.default.createElement(_Links.TokenTRC20Link,{name:token.name,address:token.contract_address,namePlus:token.name+' ('+token.symbol+')'}),_react2.default.createElement("i",null)):_react2.default.createElement(_Links.TokenTRC20Link,{name:token.name,address:token.contract_address,namePlus:token.name+' ('+token.symbol+')'})),_react2.default.createElement("td",{className:"text-right"},_react2.default.createElement("span",null,token.token20_balance)));})));}},{key:"renderTokens",value:function renderTokens(){var hideSmallCurrency=this.state.hideSmallCurrency;var _props$tokenBalances=this.props.tokenBalances,tokenBalances=_props$tokenBalances===undefined?[]:_props$tokenBalances;if(hideSmallCurrency){tokenBalances=(0,_lodash2.default)(tokenBalances).filter(function(tb){return tb.name.toUpperCase()!=="_";}).filter(function(tb){return tb.map_amount>=10;}).value();}else{tokenBalances=(0,_lodash2.default)(tokenBalances).filter(function(tb){return tb.name.toUpperCase()!=="_";}).filter(function(tb){return tb.map_amount>0;}).value();}if(tokenBalances.length===0){return _react2.default.createElement("div",{className:"text-center d-flex justify-content-center p-4"},(0,_i18n.tu)("no_tokens"));}return _react2.default.createElement("table",{className:"table mt-3 temp-table"},_react2.default.createElement("thead",{className:"thead-light"},_react2.default.createElement("tr",null,_react2.default.createElement("th",{width:"40%"},(0,_i18n.tu)("name")),_react2.default.createElement("th",null,"ID"),_react2.default.createElement("th",null,(0,_i18n.tu)("TRC20_decimals")),_react2.default.createElement("th",{className:"text-right"},(0,_i18n.tu)("balance")))),_react2.default.createElement("tbody",null,tokenBalances.map(function(token){return _react2.default.createElement("tr",{key:token.name},_react2.default.createElement("td",{className:"text-nowrap"},token.map_token_id==1002000?_react2.default.createElement("div",{className:"map-token-top"},_react2.default.createElement(_Links.TokenLink,{id:token.map_token_id,name:token.map_token_name+' ('+token.map_token_name_abbr+")",address:token.address}),_react2.default.createElement("i",null)):_react2.default.createElement(_Links.TokenLink,{id:token.map_token_id,name:token.map_token_name+' ('+token.map_token_name_abbr+")",address:token.address})),_react2.default.createElement("td",null,_react2.default.createElement("div",{className:"tokenBalances_id"},token.map_token_id)),_react2.default.createElement("td",null,_react2.default.createElement("div",null,token.map_token_precision)),_react2.default.createElement("td",{className:"text-right"},_react2.default.createElement(_reactIntl.FormattedNumber,{value:token.map_amount,maximumFractionDigits:Number(token.map_token_precision)})));})));}},{key:"renderBandwidth",value:function renderBandwidth(){var currentWallet=this.props.currentWallet;return _react2.default.createElement("div",{className:"row mt-3"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card"},_react2.default.createElement("div",{className:"card-body px-0 border-0"},_react2.default.createElement("h5",{className:"card-title text-center m-0"},(0,_i18n.tu)("bandwidth"))),_react2.default.createElement("table",{className:"table m-0"},_react2.default.createElement("tbody",null,_react2.default.createElement("tr",null,_react2.default.createElement("th",{style:{width:200}},(0,_i18n.tu)("free_bandwidth")),_react2.default.createElement("td",null,_react2.default.createElement("span",{className:"text-primary"},_react2.default.createElement(_reactIntl.FormattedNumber,{value:currentWallet.bandwidth.freeNetUsed,className:"text-success"}),"\xA0"),"/\xA0",_react2.default.createElement("span",{className:"text-muted"},_react2.default.createElement(_reactIntl.FormattedNumber,{value:currentWallet.bandwidth.freeNetLimit})),_react2.default.createElement("span",{className:"float-right"},Math.ceil(currentWallet.bandwidth.freeNetPercentage),"%"),_react2.default.createElement("div",{className:"progress mt-1"},_react2.default.createElement("div",{className:"progress-bar bg-primary",style:{width:currentWallet.bandwidth.freeNetPercentage+'%'}})))),_react2.default.createElement("tr",null,_react2.default.createElement("th",{style:{width:200}},(0,_i18n.tu)("bandwidth")),_react2.default.createElement("td",null,_react2.default.createElement("span",{className:"text-primary"},_react2.default.createElement(_reactIntl.FormattedNumber,{value:currentWallet.bandwidth.netUsed,className:"text-primary"}),"\xA0"),"/\xA0",_react2.default.createElement("span",{className:"text-muted"},_react2.default.createElement(_reactIntl.FormattedNumber,{value:currentWallet.bandwidth.netLimit})),_react2.default.createElement("span",{className:"float-right"},Math.ceil(currentWallet.bandwidth.netPercentage),"%"),_react2.default.createElement("div",{className:"progress mt-1"},_react2.default.createElement("div",{className:"progress-bar bg-primary",style:{width:currentWallet.bandwidth.netPercentage+'%'}})))),Object.keys(currentWallet.bandwidth.assets).length>0&&_react2.default.createElement("tr",null,_react2.default.createElement("td",{className:"bg-light text-center",colSpan:2},"Tokens")),Object.entries(currentWallet.bandwidth.assets).map(function(_ref44){var _ref45=_slicedToArray(_ref44,2),token=_ref45[0],bandwidth=_ref45[1];return _react2.default.createElement("tr",null,_react2.default.createElement("th",{style:{width:200}},token),_react2.default.createElement("td",null,_react2.default.createElement("span",{className:"text-primary"},_react2.default.createElement(_reactIntl.FormattedNumber,{value:bandwidth.netUsed,className:"text-primary"}),"\xA0"),"/\xA0",_react2.default.createElement("span",{className:"text-muted"},_react2.default.createElement(_reactIntl.FormattedNumber,{value:bandwidth.netLimit})),_react2.default.createElement("span",{className:"float-right"},Math.ceil(bandwidth.netPercentage),"%"),_react2.default.createElement("div",{className:"progress mt-1"},_react2.default.createElement("div",{className:"progress-bar bg-primary",style:{width:bandwidth.netPercentage+'%'}}))));}))))));}},{key:"renderFrozenTokens",value:function renderFrozenTokens(){var _this5=this;var _props2=this.props,frozen=_props2.frozen,accountResource=_props2.accountResource,delegated=_props2.delegated,account=_props2.account;var receiveDelegateBandwidth=0;if(delegated&&delegated.receivedDelegatedBandwidth){for(var i=0;i<delegated.receivedDelegatedBandwidth.length;i++){receiveDelegateBandwidth=receiveDelegateBandwidth+delegated.receivedDelegatedBandwidth[i]['frozen_balance_for_bandwidth'];}}var frozenBandwidth=0;if(frozen.balances.length>0){frozenBandwidth=frozen.balances[0].amount;}var receiveDelegateResource=0;if(delegated&&delegated.receivedDelegatedResource){for(var _i=0;_i<delegated.receivedDelegatedResource.length;_i++){receiveDelegateResource=receiveDelegateResource+delegated.receivedDelegatedResource[_i]['frozen_balance_for_energy'];}}var frozenEnergy=0;if(accountResource.frozen_balance>0){frozenEnergy=accountResource.frozen_balance;}if(frozenEnergy===0&&frozenBandwidth===0&&receiveDelegateBandwidth===0&&receiveDelegateResource===0){return null;}return _react2.default.createElement("div",{style:{overflow:'auto'}},_react2.default.createElement("h5",null,(0,_i18n.tu)("my_account")),_react2.default.createElement("table",{className:"table m-0 temp-table"},_react2.default.createElement("thead",{className:"thead-light"},_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("freeze_type")),_react2.default.createElement("th",null,(0,_i18n.tu)("delegate_other")),_react2.default.createElement("th",null,(0,_i18n.tu)("freeze_self")),_react2.default.createElement("th",null,(0,_i18n.tu)("total_amount")),_react2.default.createElement("th",{className:"text-right"},(0,_i18n.tu)("unfreeze_time")),_react2.default.createElement("th",null))),_react2.default.createElement("tbody",null,(frozen.balances.length>0||delegated&&delegated.receivedDelegatedBandwidth&&delegated.receivedDelegatedBandwidth.length>0)&&_react2.default.createElement("tr",null,_react2.default.createElement("td",null,(0,_i18n.tu)('bandwidth')),_react2.default.createElement("td",null,_react2.default.createElement(_Price.TRXPrice,{amount:receiveDelegateBandwidth/_constants.ONE_TRX})),_react2.default.createElement("td",null,_react2.default.createElement(_Price.TRXPrice,{amount:frozenBandwidth/_constants.ONE_TRX})),_react2.default.createElement("td",null,_react2.default.createElement(_Price.TRXPrice,{amount:(receiveDelegateBandwidth+frozenBandwidth)/_constants.ONE_TRX})),frozen.balances.length>0?_react2.default.createElement("td",{className:"text-right"},_react2.default.createElement("span",{className:"mr-1"},(0,_i18n.tu)('After')),_react2.default.createElement(_reactIntl.FormattedDate,{value:frozen.balances[0].expires}),"\xA0",_react2.default.createElement(_reactIntl.FormattedTime,{value:frozen.balances[0].expires,hour:"numeric",minute:"numeric",second:"numeric",hour12:false})):_react2.default.createElement("td",null),_react2.default.createElement("td",{className:"text-right"},frozenBandwidth!==0&&_react2.default.createElement("button",{className:"btn btn-danger mr-2",style:{marginTop:'-5px',marginBottom:'-5px'},onClick:function onClick(){_this5.showUnfreezeModal(0,false,'');}},(0,_i18n.tu)("unfreeze")))),(accountResource.frozen_balance>0||delegated&&delegated.receivedDelegatedResource&&delegated.receivedDelegatedResource.length>0)&&_react2.default.createElement("tr",null,_react2.default.createElement("td",null,(0,_i18n.tu)('energy')),_react2.default.createElement("td",null,_react2.default.createElement(_Price.TRXPrice,{amount:receiveDelegateResource/_constants.ONE_TRX})),_react2.default.createElement("td",null,_react2.default.createElement(_Price.TRXPrice,{amount:frozenEnergy/_constants.ONE_TRX})),_react2.default.createElement("td",null,_react2.default.createElement(_Price.TRXPrice,{amount:(frozenEnergy+receiveDelegateResource)/_constants.ONE_TRX})),accountResource.frozen_balance>0?_react2.default.createElement("td",{className:"text-right"},_react2.default.createElement("span",{className:"mr-1"},(0,_i18n.tu)('After')),_react2.default.createElement(_reactIntl.FormattedDate,{value:accountResource.expire_time}),"\xA0",_react2.default.createElement(_reactIntl.FormattedTime,{value:accountResource.expire_time,hour:"numeric",minute:"numeric",second:"numeric",hour12:false})):_react2.default.createElement("td",null),_react2.default.createElement("td",{className:"text-right"},frozenEnergy!==0&&_react2.default.createElement("button",{className:"btn btn-danger mr-2",style:{marginTop:'-5px',marginBottom:'-5px'},onClick:function onClick(){_this5.showUnfreezeModal(1,false,'');}},(0,_i18n.tu)("unfreeze")))))));}},{key:"renderDelegateFrozenTokens",value:function renderDelegateFrozenTokens(){var _this6=this;var _props3=this.props,frozen=_props3.frozen,accountResource=_props3.accountResource,account=_props3.account,delegated=_props3.delegated;if(!delegated||delegated&&delegated.sentDelegatedBandwidth&&delegated.sentDelegatedBandwidth.length===0&&delegated&&delegated.sentDelegatedResource&&delegated.sentDelegatedResource.length===0){return null;}return _react2.default.createElement("div",{style:{overflow:'auto'}},_react2.default.createElement("h5",{style:{marginTop:'10px'}},(0,_i18n.tu)("delegate_list")),_react2.default.createElement("table",{className:"table m-0 temp-table"},_react2.default.createElement("thead",{className:"thead-light"},_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)('receive_list')),_react2.default.createElement("th",null,(0,_i18n.tu)('type')),_react2.default.createElement("th",null,(0,_i18n.tu)('amount')),_react2.default.createElement("th",{className:"text-right"},(0,_i18n.tu)("unfreeze_time")),_react2.default.createElement("th",null))),_react2.default.createElement("tbody",null,delegated&&delegated.sentDelegatedBandwidth&&delegated.sentDelegatedBandwidth.map(function(item,index){return _react2.default.createElement("tr",{key:index},_react2.default.createElement("td",null,_react2.default.createElement(_Links.AddressLink,{address:item.to,truncate:false},_react2.default.createElement("span",{className:"color-tron-100"},item.to))),_react2.default.createElement("td",null,(0,_i18n.tu)('bandwidth')),_react2.default.createElement("td",null,_react2.default.createElement(_Price.TRXPrice,{amount:item.frozen_balance_for_bandwidth/_constants.ONE_TRX})),_react2.default.createElement("td",{className:"text-right"},_react2.default.createElement("span",{className:"mr-1"},(0,_i18n.tu)('After')),_react2.default.createElement(_reactIntl.FormattedDate,{value:item.expire_time_for_bandwidth}),"\xA0",_react2.default.createElement(_reactIntl.FormattedTime,{value:item.expire_time_for_bandwidth,hour:"numeric",minute:"numeric",second:"numeric",hour12:false})),_react2.default.createElement("td",{className:"text-right"},_react2.default.createElement("button",{className:"btn btn-danger mr-2",style:{marginTop:'-5px',marginBottom:'-5px'},onClick:function onClick(){_this6.showUnfreezeModal(0,true,item.to);}},(0,_i18n.tu)("unfreeze"))));}),delegated&&delegated.sentDelegatedResource&&delegated.sentDelegatedResource.map(function(item){return _react2.default.createElement("tr",null,_react2.default.createElement("td",null,_react2.default.createElement(_Links.AddressLink,{address:item.to,truncate:false},_react2.default.createElement("span",{className:"color-tron-100"},item.to))),_react2.default.createElement("td",null,(0,_i18n.tu)('energy')),_react2.default.createElement("td",null,_react2.default.createElement(_Price.TRXPrice,{amount:item.frozen_balance_for_energy/_constants.ONE_TRX})),_react2.default.createElement("td",{className:"text-right"},_react2.default.createElement("span",{className:"mr-1"},(0,_i18n.tu)('After')),_react2.default.createElement(_reactIntl.FormattedDate,{value:item.expire_time_for_energy}),"\xA0",_react2.default.createElement(_reactIntl.FormattedTime,{value:item.expire_time_for_energy,hour:"numeric",minute:"numeric",second:"numeric",hour12:false})),_react2.default.createElement("td",{className:"text-right"},_react2.default.createElement("button",{className:"btn btn-danger mr-2",style:{marginTop:'-5px',marginBottom:'-5px'},onClick:function onClick(){_this6.showUnfreezeModal(1,true,item.to);}},(0,_i18n.tu)("unfreeze"))));}))));}},{key:"renderTransactions",value:function renderTransactions(){var currentWallet=this.props.currentWallet;return _react2.default.createElement(_Transactions2.default,{theadClass:"thead-light",showTotal:false,autoRefresh:30000,pagingProps:{showPageSize:false},EmptyState:function EmptyState(){return _react2.default.createElement("p",{className:"text-center"},"No transactions yet");},filter:{address:currentWallet.address},page:{router:'account'}});}},{key:"render",value:function render(){var _this7=this;var _state=this.state,modal=_state.modal,sr=_state.sr,issuedAsset=_state.issuedAsset,showBandwidth=_state.showBandwidth,showBuyTokens=_state.showBuyTokens,temporaryName=_state.temporaryName,hideSmallCurrency=_state.hideSmallCurrency,tokenTRC10=_state.tokenTRC10;var _props4=this.props,account=_props4.account,frozen=_props4.frozen,totalTransactions=_props4.totalTransactions,currentWallet=_props4.currentWallet,wallet=_props4.wallet,accountResource=_props4.accountResource,trxBalance=_props4.trxBalance,intl=_props4.intl;if(!wallet.isOpen||!currentWallet){return _react2.default.createElement("main",{className:"container header-overlap"},_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card p-3"},_react2.default.createElement("h5",{className:"text-muted text-center"},(0,_i18n.tu)("no_open_wallet"))))));}var hasFrozen=frozen.balances.length>0;var hasResourceFrozen=accountResource.frozen_balance>0;var url='https://trx.market/launchBase?utm_source=TS4';if(intl.locale=='zh'){url='https://trx.market/zh/launchBase?utm_source=TS4';}return _react2.default.createElement("main",{className:"container header-overlap token_black accounts"},modal,_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-md-3"},_react2.default.createElement("div",{className:"card h-100 bg-line_red bg-image_band"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("h3",{style:{color:'#C23631'}},_react2.default.createElement(_reactIntl.FormattedNumber,{value:currentWallet.bandwidth.netRemaining+currentWallet.bandwidth.freeNetRemaining})),(0,_i18n.tu)("bandwidth"),_react2.default.createElement("span",{className:"ml-2"},_react2.default.createElement(_QuestionMark.QuestionMark,{placement:"top",text:"bandwidth_tip"}))))),_react2.default.createElement("div",{className:"col-md-3 mt-3 mt-md-0"},_react2.default.createElement("div",{className:"card h-100 bg-line_blue bg-image_engry"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("h3",{style:{color:'#4A90E2'}},_react2.default.createElement(_reactIntl.FormattedNumber,{value:currentWallet.bandwidth.energyRemaining})),(0,_i18n.tu)("energy"),_react2.default.createElement("span",{className:"ml-2"},_react2.default.createElement(_QuestionMark.QuestionMark,{placement:"top",text:"energy_tip"}))))),_react2.default.createElement("div",{className:"col-md-3 mt-3 mt-md-0"},_react2.default.createElement("div",{className:"card h-100 bg-line_yellow bg-image_vote"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("h3",{style:{color:'#E0AE5C'}},_react2.default.createElement(_reactIntl.FormattedNumber,{value:currentWallet.frozenTrx/_constants.ONE_TRX})),"TRON ",(0,_i18n.tu)("power"),_react2.default.createElement("span",{className:"ml-2"},_react2.default.createElement(_QuestionMark.QuestionMark,{placement:"top",text:"power_tip"}))))),_react2.default.createElement("div",{className:"col-md-3 mt-3 mt-md-0"},_react2.default.createElement("div",{className:"card h-100 bg-line_green bg-image_balance"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("h3",{style:{color:'#93C54B'}},_react2.default.createElement(_Price.TRXPrice,{amount:currentWallet.balance/_constants.ONE_TRX})),(0,_i18n.tu)("available_balance"))))),showBandwidth&&this.renderBandwidth(),_react2.default.createElement("div",{className:"row mt-3"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card px-3"},currentWallet.representative.enabled&&_react2.default.createElement("div",{className:"card-header bg-info text-center font-weight-bold text-white"},"Representative"),_react2.default.createElement("div",{className:"table-responsive"},_react2.default.createElement("table",{className:"table m-0"},_react2.default.createElement("tbody",null,wallet.isOpen&&_react2.default.createElement("tr",null,_react2.default.createElement("th",{style:{border:'none'}},(0,_i18n.tu)("name"),":"),_react2.default.createElement("td",{style:{border:'none'}},currentWallet.name||temporaryName||"-",(0,_lodash.trim)(currentWallet.name)===""&&(currentWallet.balance>0||currentWallet.frozenTrx>0)&&_react2.default.createElement("a",{href:"javascript:",className:"float-right text-primary btn btn-default btn-sm",onClick:function onClick(){_this7.changeName();}},(0,_i18n.tu)("set_name")))),currentWallet.representative.enabled&&_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("website"),":"),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:currentWallet.representative.url},currentWallet.representative.url),_react2.default.createElement("a",{href:"javascript:",className:"float-right text-primary btn btn-default btn-sm",onClick:function onClick(){_this7.changeWebsite();}},(0,_i18n.tu)("change_website")))),_react2.default.createElement("tr",null,_react2.default.createElement("th",{style:{width:150}},(0,_i18n.tu)("address"),":"),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:"javascript:",className:"float-right text-primary btn btn-default btn-sm",onClick:this.showQrCode},(0,_i18n.tu)("show_qr_code")),_react2.default.createElement("div",{className:"float-left",style:{width:350}},_react2.default.createElement(_Links.AddressLink,{address:account.address,includeCopy:true})),_constants.IS_TESTNET&&_react2.default.createElement("p",{className:"text-danger"},"(",(0,_i18n.tu)("do_not_send_2"),")"))),_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("transactions"),":"),_react2.default.createElement("td",null,_react2.default.createElement(_reactIntl.FormattedNumber,{value:totalTransactions}))))))))),issuedAsset&&_react2.default.createElement("div",{className:"row mt-3"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("h5",{className:"card-title text-center m-0"},(0,_i18n.tu)("issued_token")),_react2.default.createElement("table",{className:"table mt-3 temp-table"},_react2.default.createElement("tbody",null,_react2.default.createElement("tr",null,_react2.default.createElement("th",{style:{width:150}},(0,_i18n.tu)("name"),":"),_react2.default.createElement("td",null,_react2.default.createElement("div",{className:"d-flex justify-content-between"},_react2.default.createElement("div",null,_react2.default.createElement(_Links.TokenLink,{id:issuedAsset.id,name:issuedAsset.name,address:issuedAsset.ownerAddress,namePlus:issuedAsset.name+' ('+issuedAsset.abbr+')'}),_react2.default.createElement("span",{style:{color:"#999",fontSize:12}},"[",issuedAsset.id,"]")),(issuedAsset.canShow==0||issuedAsset.canShow==1||issuedAsset.canShow==2)&&_react2.default.createElement("div",{className:"d-flex align-items-center"},_react2.default.createElement("img",{src:__webpack_require__(2429),width:"14",height:"14",className:"mr-1"}),(0,_i18n.tu)("Passed_audit")),issuedAsset.canShow==3&&_react2.default.createElement("div",{className:"d-flex align-items-center"},_react2.default.createElement("img",{src:__webpack_require__(2430),width:"14",height:"14",className:"mr-1"}),(0,_i18n.tu)("Audit_failed"))))),_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("start_date"),":"),_react2.default.createElement("td",null,issuedAsset.endTime-issuedAsset.startTime>1000?_react2.default.createElement("span",null,_react2.default.createElement(_reactIntl.FormattedDate,{value:issuedAsset.startTime}),' ',_react2.default.createElement(_reactIntl.FormattedTime,{value:issuedAsset.startTime,hour:"numeric",minute:"numeric",second:"numeric",hour12:false})):"-")),_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("end_date"),":"),_react2.default.createElement("td",null,issuedAsset.endTime-issuedAsset.startTime>1000?_react2.default.createElement("span",null,_react2.default.createElement(_reactIntl.FormattedDate,{value:issuedAsset.endTime}),' ',_react2.default.createElement(_reactIntl.FormattedTime,{value:issuedAsset.endTime,hour:"numeric",minute:"numeric",second:"numeric",hour12:false})):"-")),_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("progress"),":"),_react2.default.createElement("td",{className:"d-flex"},_react2.default.createElement("div",{className:"progress mt-1",style:{width:'95%'}},_react2.default.createElement("div",{className:"progress-bar bg-success",style:{width:issuedAsset.issuedPercentage+'%'}})),_react2.default.createElement("div",{className:"ml-2"},issuedAsset.issuedPercentage.toFixed(3)+'%'))),currentWallet&&currentWallet.frozen_supply.length>0&&_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("frozen_supply"),":"),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:"javascript:",className:"float-right text-primary",onClick:function onClick(){_this7.unfreezeAssetsConfirmation();}},(0,_i18n.tu)("unfreeze_assets")),currentWallet.frozen_supply.map(function(frozen,index){return _react2.default.createElement("div",{key:index},frozen.amount/Math.pow(10,issuedAsset.precision),frozen.expires>(0,_dateFns.getTime)(new Date())?_react2.default.createElement("span",null,_react2.default.createElement("span",null," ",(0,_i18n.tu)("can_be_unlocked"),"\xA0"),_react2.default.createElement(_reactIntl.FormattedRelative,{value:frozen.expires})):_react2.default.createElement("span",null," ",(0,_i18n.tu)("can_be_unlocked_now"),"\xA0"));}))))),_react2.default.createElement("div",{className:"d-flex align-items-center"},_react2.default.createElement("button",{className:"btn btn-danger btn-lg mb-3 mr-3",onClick:this.toissuedAsset,style:{minWidth:'120px'}},(0,_i18n.tu)('token_detail')),_react2.default.createElement("p",{style:{color:'rgb(153, 153, 153)',fontSize:'12px'}},(0,_i18n.tu)("Have_questions")," ",_react2.default.createElement("a",{href:"https://t.me/tronscan_org",target:"_bank"},(0,_i18n.tu)("Please_contact_us")))))))),_react2.default.createElement("div",{className:"row mt-3"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card"},_react2.default.createElement("div",{className:"card-body temp-table"},_react2.default.createElement("div",{className:"d-flex justify-content-between account-switch"},_react2.default.createElement("h5",{className:"card-title text-center m-0"},(0,_i18n.tu)("tokens")),_react2.default.createElement(_Switch.SwitchToken,{handleSwitch:this.handleSwitch,text:"hide_small_currency",hoverText:"tokens_less_than_10"})),_react2.default.createElement("div",{className:"account-token-tab"},_react2.default.createElement("a",{href:"javascript:;",className:"btn btn-default btn-sm"+(tokenTRC10?' active':''),onClick:this.handleTRC10Token},(0,_i18n.tu)("TRC10_token")),_react2.default.createElement("a",{href:"javascript:;",className:"btn btn-default btn-sm ml-2"+(tokenTRC10?'':' active'),onClick:this.handleTRC20Token},(0,_i18n.tu)("TRC20_token"))),tokenTRC10?_react2.default.createElement("div",{className:"table-responsive-token"},this.renderTokens()):_react2.default.createElement("div",{className:"table-responsive-token"},this.renderTRC20Tokens()))))),_react2.default.createElement("div",{className:"row mt-3"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("div",{className:"d-flex justify-content-between trade_pair_title"},_react2.default.createElement("h5",{className:"card-title text-center"},(0,_i18n.tu)("my_trading_pairs"),(0,_i18n.tu)("deal_pair_tip")),_react2.default.createElement("p",{className:"card-text"},_react2.default.createElement("a",{href:"javascript:",className:trxBalance>=this.state.dealPairTrxLimit?"btn btn-default btn-sm btn-plus-square":"float-right btn btn-default btn-sm btn-plus-square disabled",onClick:function onClick(){_this7.changeTxnPair();}},_react2.default.createElement("i",{className:"fa fa-plus-square"}),"\xA0",(0,_i18n.tu)("create_trading_pairs")))),_react2.default.createElement("div",{style:{overflowX:'auto'}},_react2.default.createElement("table",{className:"table m-0 temp-table mt-4"},_react2.default.createElement("thead",{className:"thead-light"},_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("pairs")),_react2.default.createElement("th",null,(0,_i18n.tu)("balance")),_react2.default.createElement("th",{className:"text-right"}))),_react2.default.createElement("tbody",null,currentWallet.exchanges.length?currentWallet.exchanges.map(function(exchange,index){return _react2.default.createElement("tr",{key:index},_react2.default.createElement("td",{style:{position:'relative'}},exchange.map_token_name==="_"?"TRX":exchange.map_token_name,"/",exchange.map_token_name1==="_"?"TRX":exchange.map_token_name1,_react2.default.createElement("div",{style:{fontSize:12,color:'#999',position:'absolute',bottom:0}},"[ID:",exchange.map_token_id,"]")),_react2.default.createElement("td",null,_react2.default.createElement(_reactIntl.FormattedNumber,{value:exchange.map_amount}),"/",_react2.default.createElement(_reactIntl.FormattedNumber,{value:exchange.map_amount1})),_react2.default.createElement("td",{className:"text-right",style:{display:'flex',flexDirection:'row',justifyContent:'flex-end'}},_react2.default.createElement("div",{className:"dex-inject",style:{whiteSpace:'nowrap'},onClick:function onClick(){_this7.injectTxnPair(exchange);}},(0,_i18n.tu)("capital_injection")),"|",_react2.default.createElement("div",{className:"dex-divestment",style:{whiteSpace:'nowrap'},onClick:function onClick(){_this7.withdrawTxnPair(exchange);}},(0,_i18n.tu)("capital_withdrawal"))));}):_react2.default.createElement("tr",null,_react2.default.createElement("td",null),_react2.default.createElement("td",null,(0,_i18n.tu)('no_pairs')),_react2.default.createElement("td",null))))))))),_react2.default.createElement("div",{className:"row mt-3"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card"},_react2.default.createElement("div",{className:"card-body temp-table"},_react2.default.createElement("h5",{className:"card-title text-center m-0"},(0,_i18n.tu)("transactions")),this.renderTransactions())))),_react2.default.createElement("div",{className:"row mt-3",id:"tronPower"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("h5",{className:"card-title text-center m-0"},"TRON ",(0,_i18n.tu)("power")),_react2.default.createElement("div",{className:"card-body px-0 d-lg-flex justify-content-lg-between"},_react2.default.createElement("p",{className:"card-text freeze-trx-premessage"},(0,_i18n.tu)("freeze_trx_premessage_0"),_react2.default.createElement(_reactRouterDom.Link,{to:"/sr/votes"},(0,_i18n.t)("freeze_trx_premessage_link")),(0,_i18n.tu)("freeze_trx_gain_bandwith_energy"),_react2.default.createElement("br",null),_react2.default.createElement("br",null),(0,_i18n.tu)("freeze_trx_premessage_1"),_react2.default.createElement("br",null),_react2.default.createElement("br",null),(0,_i18n.tu)("freeze_trx_premessage_2")),_react2.default.createElement("div",null,_react2.default.createElement("button",{className:"btn btn-primary",onClick:function onClick(){_this7.showFreezeBalance();}},(0,_i18n.tu)("freeze")))),this.renderFrozenTokens(),this.renderDelegateFrozenTokens())))),currentWallet.representative.enabled?_react2.default.createElement("div",{className:"row mt-3"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("h5",{className:"card-title text-center"},(0,_i18n.tu)("Super Representatives")),_react2.default.createElement("p",{className:"card-text"},(0,_i18n.tu)("sr_receive_reward_message_0")),_react2.default.createElement("div",{className:"text-center"},_react2.default.createElement("button",{className:"btn btn-success",onClick:function onClick(){_this7.claimRewards();},disabled:currentWallet.representative.allowance===0},(0,_i18n.tu)("claim_rewards")),currentWallet.representative.allowance>0?_react2.default.createElement("p",{className:"m-0 mt-3 text-success"},"Claimable Rewards: ",_react2.default.createElement(_Price.TRXPrice,{amount:currentWallet.representative.allowance/_constants.ONE_TRX,className:"font-weight-bold"})):_react2.default.createElement("p",{className:"m-0 mt-3 font-weight-bold",style:{color:'#D0AC6E'}},"No rewards to claim")),_react2.default.createElement("hr",null),_react2.default.createElement("h5",{className:"card-title text-center"},(0,_i18n.tu)("landing_page")),_react2.default.createElement("div",{className:"text-center"},_react2.default.createElement("p",{className:"card-text text-center"},(0,_i18n.tu)("create_sr_landing_page_message_0")),_react2.default.createElement("p",{className:"text-center"},_react2.default.createElement(_Links.HrefLink,{className:"btn btn-danger",href:"https://github.com/tronscan/tronsr-template#readme"},(0,_i18n.tu)("show_more_information_publish_sr_page"))),!this.hasGithubLink()&&_react2.default.createElement(_react.Fragment,null,_react2.default.createElement("p",{className:"card-text text-center"},(0,_i18n.tu)("set_github_url_message_0")),_react2.default.createElement("p",{className:"text-center"},_react2.default.createElement("button",{className:"btn btn-dark mr-2",onClick:function onClick(){_this7.changeGithubURL();}},(0,_i18n.tu)("set_github_link")))))),this.hasGithubLink()&&_react2.default.createElement("table",{className:"table m-0"},_react2.default.createElement("tbody",null,_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("Github Link"),":"),_react2.default.createElement("td",null,_react2.default.createElement(_Links.HrefLink,{href:"http://github.com/"+sr.githubLink,target:"_blank"},"http://github.com/"+sr.githubLink),_react2.default.createElement("a",{href:"javascript:;",className:"float-right text-primary",onClick:function onClick(){_this7.changeGithubURL();}},(0,_i18n.tu)("Change Github Link")))),_react2.default.createElement("tr",null,_react2.default.createElement("th",null,(0,_i18n.tu)("Representative Page")),_react2.default.createElement("td",null,_react2.default.createElement(_reactRouterDom.Link,{className:"text-primary",to:"/representative/"+currentWallet.address},"View")))))))):_react2.default.createElement("div",{className:"row mt-3"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("h5",{className:"card-title text-center m-0"},(0,_i18n.tu)("Super Representatives")),_react2.default.createElement("p",{className:"pt-3"},(0,_i18n.tu)("apply_for_delegate_predescription")),_react2.default.createElement("div",{className:"text-center"},!_constants.IS_TESTNET&&_react2.default.createElement("button",{className:"apply-super-btn btn btn-success",onClick:function onClick(){_this7.applyForDelegate();}},(0,_i18n.tu)("apply_super_representative_candidate"))))))));}}]);return Account;}(_react.Component))||_class)||_class)||_class);exports.default=Account;

/***/ }),

/***/ 2373:
/***/ (function(module, exports) {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ 2374:
/***/ (function(module, exports, __webpack_require__) {

var VersionCheck = __webpack_require__(2459)
var Regex = __webpack_require__(2460)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 2376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__(2415)

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    })
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length)
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that
    if (buf === null) {
      buf = new Buffer(length)
    }
    buf.length = length
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0)

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(that, length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf)
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(that, len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, offset)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(null, length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports = Buffer


/***/ }),

/***/ 2415:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 2416:
/***/ (function(module, exports) {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 2428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.NumberField=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _lodash=__webpack_require__(17);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var NumberField=exports.NumberField=function(_React$Component){_inherits(NumberField,_React$Component);function NumberField(){var _ref;var _temp,_this,_ret;_classCallCheck(this,NumberField);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=NumberField.__proto__||Object.getPrototypeOf(NumberField)).call.apply(_ref,[this].concat(args))),_this),_this.onChange=function(ev){var _this$props=_this.props,onChange=_this$props.onChange,_this$props$decimals=_this$props.decimals,decimals=_this$props$decimals===undefined?6:_this$props$decimals,_this$props$min=_this$props.min,min=_this$props$min===undefined?null:_this$props$min,_this$props$max=_this$props.max,max=_this$props$max===undefined?null:_this$props$max;if(onChange){var number=ev.target.value;number=parseFloat(number);if(isNaN(number)){number='';}else{number=(0,_lodash.round)(number,decimals);if(min!==null){number=number>min?number:min;}if(max!==null){number=number>max?max:number;}}onChange(number);}},_this.onKeyDownCheck=function(event){if(String.fromCharCode(event.which)==='E'){event.preventDefault();return false;}},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(NumberField,[{key:"render",value:function render(){var _props=this.props,onChange=_props.onChange,props=_objectWithoutProperties(_props,["onChange"]);return _react2.default.createElement("input",Object.assign({type:"text",onKeyDown:this.onKeyDownCheck,onChange:this.onChange},props));}}]);return NumberField;}(_react2.default.Component);

/***/ }),

/***/ 2429:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 2430:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 2458:
/***/ (function(module, exports, __webpack_require__) {

var ECLevel = __webpack_require__(2416)

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ 2459:
/***/ (function(module, exports) {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ 2460:
/***/ (function(module, exports) {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+\\-./:]+'
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ 2461:
/***/ (function(module, exports) {

function hex2rgba (hex) {
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  var width = options.width && options.width >= 21 ? options.width : undefined
  var scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scale = exports.getScale(size, opts)
  var symbolSize = Math.floor((size + opts.margin * 2) * scale)
  var scaledMargin = opts.margin * scale
  var palette = [opts.color.light, opts.color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ 2537:
/***/ (function(module, exports, __webpack_require__) {


var canPromise = __webpack_require__(2538)

var QRCode = __webpack_require__(2539)
var CanvasRenderer = __webpack_require__(2556)
var SvgRenderer = __webpack_require__(2557)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1)
  var argsNum = args.length
  var isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ 2538:
/***/ (function(module, exports) {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ 2539:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(2376)
var Utils = __webpack_require__(2373)
var ECLevel = __webpack_require__(2416)
var BitBuffer = __webpack_require__(2540)
var BitMatrix = __webpack_require__(2541)
var AlignmentPattern = __webpack_require__(2542)
var FinderPattern = __webpack_require__(2543)
var MaskPattern = __webpack_require__(2544)
var ECCode = __webpack_require__(2458)
var ReedSolomonEncoder = __webpack_require__(2545)
var Version = __webpack_require__(2548)
var FormatInfo = __webpack_require__(2549)
var Mode = __webpack_require__(2374)
var Segments = __webpack_require__(2550)
var isArray = __webpack_require__(2415)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = new Buffer(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = new Buffer(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version
  var mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ 2540:
/***/ (function(module, exports) {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ 2541:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(2376)

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Buffer(size * size)
  this.data.fill(0)
  this.reservedBit = new Buffer(size * size)
  this.reservedBit.fill(0)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ 2542:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = __webpack_require__(2373).getSymbolSize

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ 2543:
/***/ (function(module, exports, __webpack_require__) {

var getSymbolSize = __webpack_require__(2373).getSymbolSize
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ 2544:
/***/ (function(module, exports) {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ 2545:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(2376)
var Polynomial = __webpack_require__(2546)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = new Buffer(this.degree)
  pad.fill(0)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = new Buffer(this.degree)
    buff.fill(0)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ 2546:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(2376)
var GF = __webpack_require__(2547)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = new Buffer(p1.length + p2.length - 1)
  coeff.fill(0)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = new Buffer(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = new Buffer([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),

/***/ 2547:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(2376)

if(Buffer.alloc) { 
  var EXP_TABLE = Buffer.alloc(512)
  var LOG_TABLE = Buffer.alloc(256)
} else {
  var EXP_TABLE = new Buffer(512)
  var LOG_TABLE = new Buffer(256)
}
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ 2548:
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(2373)
var ECCode = __webpack_require__(2458)
var ECLevel = __webpack_require__(2416)
var Mode = __webpack_require__(2374)
var VersionCheck = __webpack_require__(2459)
var isArray = __webpack_require__(2415)

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ 2549:
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(2373)

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ 2550:
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(2374)
var NumericData = __webpack_require__(2551)
var AlphanumericData = __webpack_require__(2552)
var ByteData = __webpack_require__(2553)
var KanjiData = __webpack_require__(2554)
var Regex = __webpack_require__(2460)
var Utils = __webpack_require__(2373)
var dijkstra = __webpack_require__(2555)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ 2551:
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(2374)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ 2552:
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(2374)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ 2553:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(2376)
var Mode = __webpack_require__(2374)

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = new Buffer(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ 2554:
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(2374)
var Utils = __webpack_require__(2373)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ 2555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ 2556:
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(2461)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = Utils.getImageWidth(qrData.modules.size, opts)

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ 2557:
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(2461)

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255
  var str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  var path = ''
  var moveBy = 0
  var newRow = false
  var lineLength = 0

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size)
    var row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = size + opts.margin * 2

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ 2558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.RecaptchaAsync=undefined;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactAsyncComponent=__webpack_require__(1006);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var $script=__webpack_require__(1043);var RecaptchaAsync=exports.RecaptchaAsync=(0,_reactAsyncComponent.asyncComponent)({LoadingComponent:function LoadingComponent(){return _react2.default.createElement("span",null);},resolve:function resolve(){return new Promise(function(resolve){return(// Webpack's code splitting API w/naming
__webpack_require__.e/* require.ensure */(34).then((function(require){$script("https://www.google.com/recaptcha/api.js",function(){resolve(__webpack_require__(2592));});}).bind(null, __webpack_require__)).catch(__webpack_require__.oe));});}});

/***/ }),

/***/ 2933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _regenerator=__webpack_require__(10);var _regenerator2=_interopRequireDefault(_regenerator);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;/* eslint-disable no-restricted-globals */var _reactRedux=__webpack_require__(19);var _reactIntl=__webpack_require__(11);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactstrap=__webpack_require__(60);var _i18n=__webpack_require__(13);var _api=__webpack_require__(14);var _constants=__webpack_require__(22);var _wallet=__webpack_require__(223);var _Fields=__webpack_require__(2428);var _tron=__webpack_require__(222);var _lockr=__webpack_require__(54);var _lockr2=_interopRequireDefault(_lockr);var _tronWeb=__webpack_require__(185);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var FreezeBalanceModal=(_dec=(0,_reactRedux.connect)(function(state){return{account:state.app.account,wallet:state.app.wallet,tokenBalances:state.account.tokens,trxBalance:state.account.trxBalance||state.account.balance};},{reloadWallet:_wallet.reloadWallet}),_dec(_class=(0,_reactIntl.injectIntl)(_class=(0,_tronWeb.withTronWeb)(_class=function(_React$PureComponent){_inherits(FreezeBalanceModal,_React$PureComponent);function FreezeBalanceModal(props){var _this2=this;_classCallCheck(this,FreezeBalanceModal);var _this=_possibleConstructorReturn(this,(FreezeBalanceModal.__proto__||Object.getPrototypeOf(FreezeBalanceModal)).call(this,props));_this.hideModal=function(){var onHide=_this.props.onHide;onHide&&onHide();};_this.confirmModal=function(){var onConfirm=_this.props.onConfirm;var amount=_this.state.amount;onConfirm&&onConfirm({amount:amount});};_this.onAmountChanged=function(value){var trxBalance=_this.props.trxBalance;var amount=parseInt(value);if(!isNaN(amount)){amount=amount>0?Math.floor(amount):Math.abs(amount);// amount = amount < trxBalance ? amount : trxBalance;
}else{amount="";}_this.setState({amount:amount});};_this.freeze=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee(){var _this$props,account,onError,wallet,_this$state,amount,selectedResource,receiver,confirmed,res,type,result,tronWebLedger,tronWeb,unSignTransaction,_unSignTransaction,_ref2,success;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$props=_this.props,account=_this$props.account,onError=_this$props.onError,wallet=_this$props.wallet;_this$state=_this.state,amount=_this$state.amount,selectedResource=_this$state.selectedResource,receiver=_this$state.receiver,confirmed=_this$state.confirmed;if(confirmed){_context.next=4;break;}return _context.abrupt("return");case 4:res=void 0,type=void 0,result=void 0;_this.setState({loading:true});_context.prev=6;if(!(_lockr2.default.get("islogin")||_this.props.wallet.type==="ACCOUNT_LEDGER"||_this.props.wallet.type==="ACCOUNT_TRONLINK")){_context.next=42;break;}tronWebLedger=_this.props.tronWeb();tronWeb=_this.props.account.tronWeb;if(!selectedResource){type='BANDWIDTH';}else{type='ENERGY';}if(!(_this.props.wallet.type==="ACCOUNT_LEDGER")){_context.next=25;break;}unSignTransaction=void 0;if(!(receiver==="")){_context.next=19;break;}_context.next=16;return tronWebLedger.transactionBuilder.freezeBalance(amount*_constants.ONE_TRX,3,type,wallet.address);case 16:unSignTransaction=_context.sent;_context.next=22;break;case 19:_context.next=21;return tronWebLedger.transactionBuilder.freezeBalance(amount*_constants.ONE_TRX,3,type,wallet.address,receiver);case 21:unSignTransaction=_context.sent;case 22:_context.next=24;return(0,_tron.transactionResultManager)(unSignTransaction,tronWebLedger);case 24:result=_context.sent;case 25:if(!(_this.props.wallet.type==="ACCOUNT_TRONLINK")){_context.next=39;break;}_unSignTransaction=void 0;if(!(receiver==="")){_context.next=33;break;}_context.next=30;return tronWeb.transactionBuilder.freezeBalance(amount*_constants.ONE_TRX,3,type,tronWeb.defaultAddress.base58).catch(function(e){return false;});case 30:_unSignTransaction=_context.sent;_context.next=36;break;case 33:_context.next=35;return tronWeb.transactionBuilder.freezeBalance(amount*_constants.ONE_TRX,3,type,tronWeb.defaultAddress.base58,receiver).catch(function(e){return false;});case 35:_unSignTransaction=_context.sent;case 36:_context.next=38;return(0,_tron.transactionResultManager)(_unSignTransaction,tronWeb);case 38:result=_context.sent;case 39:res=result;_context.next=47;break;case 42:_context.next=44;return _api.Client.freezeBalance(account.address,amount*_constants.ONE_TRX,3,selectedResource,receiver)(account.key);case 44:_ref2=_context.sent;success=_ref2.success;res=success;case 47:if(!res){_context.next=52;break;}_this.confirmModal({amount:amount});_this.setState({loading:false});_context.next=53;break;case 52:throw new Error("Failed to freeze");case 53:_context.next=59;break;case 55:_context.prev=55;_context.t0=_context["catch"](6);console.error(_context.t0);onError&&onError();case 59:case"end":return _context.stop();}}},_callee,_this2,[[6,55]]);}));_this.resourceSelectChange=function(value){_this.setState({selectedResource:Number(value)});};_this.setReceiverAddress=function(address){_this.setState({receiver:address});};_this.state={loading:false,confirmed:false,amount:"",resources:[{label:"gain_bandwith",value:0},{label:"gain_energy",value:1}],selectedResource:0,receiver:''};return _this;}_createClass(FreezeBalanceModal,[{key:"componentDidMount",value:function componentDidMount(){this.props.reloadWallet();}},{key:"render",value:function render(){var _this3=this;var _state=this.state,receiver=_state.receiver,amount=_state.amount,confirmed=_state.confirmed,loading=_state.loading,resources=_state.resources,selectedResource=_state.selectedResource;var _props=this.props,trxBalance=_props.trxBalance,frozenTrx=_props.frozenTrx,intl=_props.intl;trxBalance=!trxBalance?0:trxBalance;var isValid=amount>0&&trxBalance>=amount&&confirmed;return _react2.default.createElement(_reactstrap.Modal,{isOpen:true,toggle:this.hideModal,fade:false,className:"modal-dialog-centered _freezeContent"},_react2.default.createElement(_reactstrap.ModalHeader,{className:"text-center _freezeHeader",toggle:this.hideModal},(0,_i18n.tu)("freeze")),_react2.default.createElement(_reactstrap.ModalBody,{className:"text-center _freezeBody"},_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("div",{className:"text-left _power"},(0,_i18n.tu)("current_power"),": ",_react2.default.createElement("span",{style:{fontWeight:800}},frozenTrx/_constants.ONE_TRX))),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("input",{type:"text",placeholder:intl.formatMessage({id:'receive_address'}),onChange:function onChange(ev){return _this3.setReceiverAddress(ev.target.value);},className:"form-control",value:receiver})),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("div",{style:{position:'relative'}},_react2.default.createElement("button",{type:"button",onClick:function onClick(){_this3.setState({amount:Math.floor(trxBalance)});},style:styles.maxButton},"MAX"),_react2.default.createElement(_Fields.NumberField,{min:1,decimals:0,value:amount,placeholder:intl.formatMessage({id:'trx_amount'}),className:"form-control text-left",style:{marginTop:'12px',background:"#F3F3F3",border:"1px solid #EEEEEE"},onChange:this.onAmountChanged}))),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("select",{className:"custom-select",value:selectedResource,onChange:function onChange(e){_this3.resourceSelectChange(e.target.value);}},resources.map(function(resource,index){return _react2.default.createElement("option",{key:index,value:resource.value},intl.formatMessage({id:resource.label}));}))),_react2.default.createElement("div",{className:"form-check"},_react2.default.createElement("input",{type:"checkbox",className:"form-check-input",onChange:function onChange(ev){return _this3.setState({confirmed:ev.target.checked});}}),_react2.default.createElement("label",{className:"form-check-label _freeze"},(0,_i18n.tu)("token_freeze_confirm_message_0")," ",_react2.default.createElement("b",null,_react2.default.createElement(_reactIntl.FormattedNumber,{value:amount})," TRX")," ",(0,_i18n.t)("token_freeze_confirm_message_1"))),_react2.default.createElement("p",{className:"mt-3"},_react2.default.createElement("button",{className:"btn btn-primary col-sm",disabled:!isValid,onClick:this.freeze,style:{background:'#4A90E2',borderRadius:'0px',border:'0px'}},_react2.default.createElement("i",{className:"fa fa-snowflake mr-2"}),(0,_i18n.tu)("freeze")))));}}]);return FreezeBalanceModal;}(_react2.default.PureComponent))||_class)||_class)||_class);exports.default=FreezeBalanceModal;var styles={maxButton:{position:'absolute',right:0,top:0,background:'none',height:'35px',border:'none',cursor:'pointer'}};

/***/ }),

/***/ 2934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _regenerator=__webpack_require__(10);var _regenerator2=_interopRequireDefault(_regenerator);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(19);var _i18n=__webpack_require__(13);var _api=__webpack_require__(14);var _reactstrap=__webpack_require__(60);var _reactBootstrapSweetalert=__webpack_require__(83);var _reactBootstrapSweetalert2=_interopRequireDefault(_reactBootstrapSweetalert);var _constants=__webpack_require__(22);var _reactIntl=__webpack_require__(11);var _tron=__webpack_require__(222);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _require=__webpack_require__(2935),isWebUri=_require.isWebUri;var ApplyForDelegate=function(_Component){_inherits(ApplyForDelegate,_Component);function ApplyForDelegate(){var _this2=this;_classCallCheck(this,ApplyForDelegate);var _this=_possibleConstructorReturn(this,(ApplyForDelegate.__proto__||Object.getPrototypeOf(ApplyForDelegate)).call(this));_this.isValid=function(){var check=_this.state.check;return check&&_this.isValidUrl();};_this.isValidUrl=function(){var url=_this.state.url;return url.length>0&&isWebUri(url);};_this.doApply=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee(){var res,_this$props,account,isTronLink,url,tronWeb,unSignTransaction,_ref2,result,_ref3,success;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:res=void 0;_this$props=_this.props,account=_this$props.account,isTronLink=_this$props.isTronLink;url=_this.state.url;_this.setState({loading:true});if(!(isTronLink===1)){_context.next=17;break;}tronWeb=void 0;if(_this.props.walletType.type==="ACCOUNT_LEDGER"){tronWeb=_this.props.tronWeb();}else if(_this.props.walletType.type==="ACCOUNT_TRONLINK"){tronWeb=account.tronWeb;}_context.next=9;return tronWeb.transactionBuilder.applyForSR(tronWeb.defaultAddress.hex,url);case 9:unSignTransaction=_context.sent;_context.next=12;return(0,_tron.transactionResultManager)(unSignTransaction,tronWeb);case 12:_ref2=_context.sent;result=_ref2.result;res=result;_context.next=22;break;case 17:_context.next=19;return _api.Client.applyForDelegate(account.address,url)(account.key);case 19:_ref3=_context.sent;success=_ref3.success;res=success;case 22:_this.setState({loading:false});if(res){_this.confirm();}else{_this.setState({modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{warning:true,title:(0,_i18n.tu)("error"),onConfirm:_this.hideModal},(0,_i18n.tu)("apply_representative_error_message_0")," ",_react2.default.createElement("br",null),(0,_i18n.tu)("apply_representative_error_message_1"))});}case 24:case"end":return _context.stop();}}},_callee,_this2);}));_this.hideModal=function(){_this.setState({modal:null});};_this.confirm=function(){var onConfirm=_this.props.onConfirm;onConfirm&&onConfirm();};_this.cancel=function(){var onCancel=_this.props.onCancel;onCancel&&onCancel();};_this.state={url:"",check:false,applyResponse:null,loading:false,modal:null};return _this;}_createClass(ApplyForDelegate,[{key:"render",value:function render(){var _this3=this;var _state=this.state,check=_state.check,loading=_state.loading,modal=_state.modal,url=_state.url;if(modal){return modal;}return _react2.default.createElement(_reactstrap.Modal,{isOpen:true,toggle:this.cancel,fade:false,size:"lg",className:"modal-dialog-centered"},_react2.default.createElement(_reactstrap.ModalHeader,{className:"text-center _applyHeader",toggle:this.cancel},(0,_i18n.tu)("Super Representatives")),_react2.default.createElement(_reactstrap.ModalBody,null,_react2.default.createElement("p",{className:"card-text text-left _applyDesc"},(0,_i18n.t)("apply_for_delegate_description")),_react2.default.createElement("hr",null),_react2.default.createElement("p",{className:"text-left"},_react2.default.createElement("label",{className:"_applyTitle"},(0,_i18n.tu)("your_personal_website_address")),_react2.default.createElement("input",{className:"form-control text-left "+(check&&!this.isValidUrl()?" is-invalid":""),type:"text",placeholder:"https://",style:{borderRadius:"0px",background:"#F3F3F3",border:"1px solid #EEEEEE "},value:url,onChange:function onChange(ev){return _this3.setState({url:ev.target.value});}}),_react2.default.createElement("div",{className:"invalid-feedback text-left text-danger"},(0,_i18n.tu)("invalid_url"))),_react2.default.createElement("div",{className:"text-center"},_react2.default.createElement("div",{className:"form-check"},_react2.default.createElement("input",{type:"checkbox",className:"form-check-input",checked:check,onChange:function onChange(ev){return _this3.setState({check:ev.target.checked});}}),_react2.default.createElement("label",{className:"form-check-label _apply"},(0,_i18n.tu)("understand_tron_sr_message_0"),_react2.default.createElement("b",null," ",_react2.default.createElement(_reactIntl.FormattedNumber,{value:_constants.WITNESS_CREATE_COST})," TRX")," ",(0,_i18n.t)("understand_tron_sr_message_1")))),_react2.default.createElement("div",{className:"pt-3"},_react2.default.createElement("p",{className:"text-center"},_react2.default.createElement("button",{disabled:!this.isValid()||loading,className:"btn btn-success",style:{width:"220px",background:"#69C265"},onClick:this.doApply},(0,_i18n.tu)("submit"))))));}}]);return ApplyForDelegate;}(_react.Component);function mapStateToProps(state){return{account:state.app.account,walletType:state.app.wallet};}var mapDispatchToProps={};exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(ApplyForDelegate);

/***/ }),

/***/ 2935:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function(module) {
    'use strict';

    module.exports.is_uri = is_iri;
    module.exports.is_http_uri = is_http_iri;
    module.exports.is_https_uri = is_https_iri;
    module.exports.is_web_uri = is_web_iri;
    // Create aliases
    module.exports.isUri = is_iri;
    module.exports.isHttpUri = is_http_iri;
    module.exports.isHttpsUri = is_https_iri;
    module.exports.isWebUri = is_web_iri;


    // private function
    // internal URI spitter method - direct from RFC 3986
    var splitUri = function(uri) {
        var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
        return splitted;
    };

    function is_iri(value) {
        if (!value) {
            return;
        }

        // check for illegal characters
        if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) return;

        // check for hex escapes that aren't complete
        if (/%[^0-9a-f]/i.test(value)) return;
        if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;

        var splitted = [];
        var scheme = '';
        var authority = '';
        var path = '';
        var query = '';
        var fragment = '';
        var out = '';

        // from RFC 3986
        splitted = splitUri(value);
        scheme = splitted[1]; 
        authority = splitted[2];
        path = splitted[3];
        query = splitted[4];
        fragment = splitted[5];

        // scheme and path are required, though the path can be empty
        if (!(scheme && scheme.length && path.length >= 0)) return;

        // if authority is present, the path must be empty or begin with a /
        if (authority && authority.length) {
            if (!(path.length === 0 || /^\//.test(path))) return;
        } else {
            // if authority is not present, the path must not start with //
            if (/^\/\//.test(path)) return;
        }

        // scheme must begin with a letter, then consist of letters, digits, +, ., or -
        if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase()))  return;

        // re-assemble the URL per section 5.3 in RFC 3986
        out += scheme + ':';
        if (authority && authority.length) {
            out += '//' + authority;
        }

        out += path;

        if (query && query.length) {
            out += '?' + query;
        }

        if (fragment && fragment.length) {
            out += '#' + fragment;
        }

        return out;
    }

    function is_http_iri(value, allowHttps) {
        if (!is_iri(value)) {
            return;
        }

        var splitted = [];
        var scheme = '';
        var authority = '';
        var path = '';
        var port = '';
        var query = '';
        var fragment = '';
        var out = '';

        // from RFC 3986
        splitted = splitUri(value);
        scheme = splitted[1]; 
        authority = splitted[2];
        path = splitted[3];
        query = splitted[4];
        fragment = splitted[5];

        if (!scheme)  return;

        if(allowHttps) {
            if (scheme.toLowerCase() != 'https') return;
        } else {
            if (scheme.toLowerCase() != 'http') return;
        }

        // fully-qualified URIs must have an authority section that is
        // a valid host
        if (!authority) {
            return;
        }

        // enable port component
        if (/:(\d+)$/.test(authority)) {
            port = authority.match(/:(\d+)$/)[0];
            authority = authority.replace(/:\d+$/, '');
        }

        out += scheme + ':';
        out += '//' + authority;
        
        if (port) {
            out += port;
        }
        
        out += path;
        
        if(query && query.length){
            out += '?' + query;
        }

        if(fragment && fragment.length){
            out += '#' + fragment;
        }
        
        return out;
    }

    function is_https_iri(value) {
        return is_http_iri(value, true);
    }

    function is_web_iri(value) {
        return (is_http_iri(value) || is_https_iri(value));
    }

})(module);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(130)(module)))

/***/ }),

/***/ 2936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _qrcode=__webpack_require__(2537);var _qrcode2=_interopRequireDefault(_qrcode);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var QRImageCode=function(_React$PureComponent){_inherits(QRImageCode,_React$PureComponent);function QRImageCode(){_classCallCheck(this,QRImageCode);var _this=_possibleConstructorReturn(this,(QRImageCode.__proto__||Object.getPrototypeOf(QRImageCode)).call(this));_this.state={img:null};return _this;}_createClass(QRImageCode,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;var _props=this.props,value=_props.value,_props$size=_props.size,size=_props$size===undefined?120:_props$size;_qrcode2.default.toDataURL(value,{width:size}).then(function(img){_this2.setState({img:img});});}},{key:"render",value:function render(){var props=_objectWithoutProperties(this.props,[]);if(!this.state.img){return null;}return _react2.default.createElement("img",Object.assign({src:this.state.img},props));}}]);return QRImageCode;}(_react2.default.PureComponent);exports.default=QRImageCode;

/***/ }),

/***/ 2937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(19);var _i18n=__webpack_require__(13);var _reactstrap=__webpack_require__(60);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ChangeNameModal=function(_Component){_inherits(ChangeNameModal,_Component);function ChangeNameModal(){_classCallCheck(this,ChangeNameModal);var _this=_possibleConstructorReturn(this,(ChangeNameModal.__proto__||Object.getPrototypeOf(ChangeNameModal)).call(this));_this.isValid=function(){var name=_this.state.name;if(name.length<8){return[false,(0,_i18n.tu)("name_to_short")];}if(name.length>32){return[false,(0,_i18n.tu)("name_to_long")];}if(!/^[a-zA-Z0-9_-]+$/.test(name)){return[false,(0,_i18n.tu)("permitted_characters_message")];}return[true];};_this.hideModal=function(){_this.setState({modal:null});};_this.confirm=function(){var onConfirm=_this.props.onConfirm;var name=_this.state.name;onConfirm&&onConfirm(name);_this.setState({disabled:true});};_this.cancel=function(){var onCancel=_this.props.onCancel;onCancel&&onCancel();};_this.state={name:"",disabled:false};return _this;}_createClass(ChangeNameModal,[{key:"render",value:function render(){var _this2=this;var _state=this.state,modal=_state.modal,name=_state.name,disabled=_state.disabled;var _isValid=this.isValid(),_isValid2=_slicedToArray(_isValid,2),isValid=_isValid2[0],errorMessage=_isValid2[1];if(modal){return modal;}return _react2.default.createElement(_reactstrap.Modal,{isOpen:true,toggle:this.cancel,fade:false,size:"lg",className:"modal-dialog-centered"},_react2.default.createElement(_reactstrap.ModalHeader,{className:"text-center",toggle:this.cancel},(0,_i18n.tu)("set_name")),_react2.default.createElement(_reactstrap.ModalBody,null,_react2.default.createElement("p",{className:"text-center"},_react2.default.createElement("label",{className:"text-danger"},(0,_i18n.tu)("unique_account_message")),_react2.default.createElement("input",{className:"form-control text-center "+(name.length!==0&&!isValid?" is-invalid":""),type:"text",placeholder:"Account Name",value:name,onChange:function onChange(ev){return _this2.setState({name:ev.target.value});}}),errorMessage?_react2.default.createElement("div",{className:"invalid-feedback text-center text-danger"},errorMessage):null),_react2.default.createElement("div",{className:"pt-3"},_react2.default.createElement("p",{className:"text-center"},_react2.default.createElement("button",{disabled:disabled||!isValid,className:"btn btn-success",onClick:this.confirm},(0,_i18n.tu)("change_name"))))));}}]);return ChangeNameModal;}(_react.Component);function mapStateToProps(state){return{};}var mapDispatchToProps={};exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(ChangeNameModal);

/***/ }),

/***/ 2938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _regenerator=__webpack_require__(10);var _regenerator2=_interopRequireDefault(_regenerator);var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactRedux=__webpack_require__(19);var _reactIntl=__webpack_require__(11);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactstrap=__webpack_require__(60);var _i18n=__webpack_require__(13);var _api=__webpack_require__(14);var _constants=__webpack_require__(22);var _wallet=__webpack_require__(223);var _Fields=__webpack_require__(2428);var _lodash=__webpack_require__(17);var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CreateTxnPairModal=function(_React$PureComponent){_inherits(CreateTxnPairModal,_React$PureComponent);function CreateTxnPairModal(){var _this2=this;_classCallCheck(this,CreateTxnPairModal);var _this=_possibleConstructorReturn(this,(CreateTxnPairModal.__proto__||Object.getPrototypeOf(CreateTxnPairModal)).call(this));_this.isValidFirstToken=function(){var _this$state=_this.state,firstTokenBalances=_this$state.firstTokenBalances,firstTokenBalance=_this$state.firstTokenBalance;if(firstTokenBalance>firstTokenBalances){return[false,(0,_i18n.tu)("creat_valid")];}if(!/^([1-9][0-9]+|[1-9])$/.test(firstTokenBalance)){return[false,(0,_i18n.tu)("operate_txn_pair_message")];}return[true];};_this.isValidSecondToken=function(){var secondTokenBalance=_this.state.secondTokenBalance;var secTokenBalances=_this.props.currentWallet.balance/1000000;if(secondTokenBalance>secTokenBalances){return[false,(0,_i18n.tu)("creat_valid")];}else if(secondTokenBalance<_this.props.dealPairTrxLimit){return[false,(0,_i18n.tu)("create_deal_pair_input_tip")];}if(!/^([1-9][0-9]+|[1-9])$/.test(secondTokenBalance)){return[false,(0,_i18n.tu)("isValidSecondToken")];}return[true];};_this.hideModal=function(){_this.setState({modal:null});};_this.create=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee(){var _this$props,onCreate,currentWallet,_this$state2,firstTokenId,secondTokenId,firstTokenBalance,secondTokenBalance,firstTokenPrecision,firstTokenBalanceNum,secondTokenBalanceNum;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$props=_this.props,onCreate=_this$props.onCreate,currentWallet=_this$props.currentWallet;_this$state2=_this.state,firstTokenId=_this$state2.firstTokenId,secondTokenId=_this$state2.secondTokenId,firstTokenBalance=_this$state2.firstTokenBalance,secondTokenBalance=_this$state2.secondTokenBalance,firstTokenPrecision=_this$state2.firstTokenPrecision;firstTokenBalanceNum=Math.ceil(parseFloat(firstTokenBalance)*Math.pow(10,firstTokenPrecision));secondTokenBalanceNum=parseFloat(secondTokenBalance)*_constants.ONE_TRX;onCreate&&onCreate(firstTokenId,secondTokenId,firstTokenBalanceNum,secondTokenBalanceNum);_this.setState({disabled:true});case 6:case"end":return _context.stop();}}},_callee,_this2);}));_this.cancel=function(){var onCancel=_this.props.onCancel;onCancel&&onCancel();};_this.firstTokenIdChange=function(value){var _this$props2=_this.props,account=_this$props2.account,currentWallet=_this$props2.currentWallet;var allowExchange=_this.state.allowExchange;var secTokenIdArr=_lodash2.default.filter(allowExchange,{"map_token_id":value});var firstTokenBalances=_lodash2.default.find(currentWallet.tokenBalances,{"map_token_id":value});var secTokenBalances=_lodash2.default.find(currentWallet.tokenBalances,{"map_token_name":"TRX"});_this.setState({firstTokenId:value,secondTokenId:"_",secTokenIdArr:secTokenIdArr,firstTokenBalances:firstTokenBalances?firstTokenBalances.balance:0,secTokenBalances:secTokenBalances?secTokenBalances.balance:0,firstTokenAmount:firstTokenBalances?firstTokenBalances.map_amount:0,secTokenAmount:secTokenBalances?secTokenBalances.map_amount:0,firstTokenPrecision:firstTokenBalances.map_token_precision},function(){});};_this.secondTokenIdChange=function(value){var currentWallet=_this.props.currentWallet;var secTokenBalances=_lodash2.default.find(currentWallet.tokenBalances,{"name":value});_this.setState({secondTokenId:value,secTokenBalances:secTokenBalances.balance},function(){});};_this.state={name:"",disabled:false,allowExchange:[],secTokenIdArr:[],firstTokenId:"",secondTokenId:"",firstTokenBalance:"",secondTokenBalance:"",firstTokenAmount:"",secTokenAmount:"",firstTokenPrecision:""};return _this;}_createClass(CreateTxnPairModal,[{key:"exchangeToken",value:function exchangeToken(){var currentWallet=this.props.currentWallet;// let allowExchange =   _.filter(currentWallet.allowExchange, function(o){
//     let block = true
//     currentWallet.exchanges.forEach(item => {
//         if((o.first_token_id == (item.first_token_id == "_"?"TRX":item.first_token_id)) && o.second_token_id == (item.second_token_id == "_"?"TRX":item.second_token_id)){
//             block = false
//         }
//     })
//     return block
// })
var allowExchange=currentWallet.tokenBalances.filter(function(v){if(v.balance>0&&v.name!=='_'){return v;}});this.setState({allowExchange:allowExchange},function(){});}},{key:"componentDidMount",value:function componentDidMount(){this.exchangeToken();}},{key:"render",value:function render(){var _this3=this;var _props=this.props,currentWallet=_props.currentWallet,intl=_props.intl;var _state=this.state,modal=_state.modal,firstTokenId=_state.firstTokenId,secTokenIdArr=_state.secTokenIdArr,secondTokenId=_state.secondTokenId,firstTokenBalances=_state.firstTokenBalances,secTokenBalances=_state.secTokenBalances,firstTokenBalance=_state.firstTokenBalance,secondTokenBalance=_state.secondTokenBalance,allowExchange=_state.allowExchange,disabled=_state.disabled,firstTokenAmount=_state.firstTokenAmount,secTokenAmount=_state.secTokenAmount;var _isValidFirstToken=this.isValidFirstToken(),_isValidFirstToken2=_slicedToArray(_isValidFirstToken,2),isValid=_isValidFirstToken2[0],errorMessageFirstToken=_isValidFirstToken2[1];var _isValidSecondToken=this.isValidSecondToken(),_isValidSecondToken2=_slicedToArray(_isValidSecondToken,2),isValid2=_isValidSecondToken2[0],errorMessageSecondToken=_isValidSecondToken2[1];if(modal){return modal;}return _react2.default.createElement(_reactstrap.Modal,{isOpen:true,toggle:this.cancel,fade:false,size:"md",className:"modal-dialog-centered"},_react2.default.createElement(_reactstrap.ModalHeader,{className:"text-center",toggle:this.cancel},_react2.default.createElement("div",null,_react2.default.createElement("i",{className:"fa fa-plus-square"}),"\xA0",(0,_i18n.tu)("create_trading_pairs")),(0,_i18n.tu)("create_deal_pair_input_tip2")),_react2.default.createElement(_reactstrap.ModalBody,null,_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-md-6"},_react2.default.createElement("label",null,(0,_i18n.tu)("name_of_the_token")),_react2.default.createElement("select",{className:"custom-select",value:firstTokenId,onChange:function onChange(e){_this3.firstTokenIdChange(e.target.value);}},firstTokenId?"":(0,_i18n.option_t)("select_the_name_of_the_Token"),allowExchange.map(function(token,index){return _react2.default.createElement("option",{key:index,value:token.map_token_id},token.map_token_name,"[ID:",token.map_token_id,"]");}))),_react2.default.createElement("div",{className:"col-md-6"},_react2.default.createElement("label",null,(0,_i18n.tu)("balance"),firstTokenAmount>=0?_react2.default.createElement("span",null,"(",firstTokenAmount,")"):""),_react2.default.createElement("input",{className:"form-control"+(firstTokenBalance.length!==0&&!isValid?" is-invalid":""),type:"text",placeholder:intl.formatMessage({id:'enter_the_amount'}),max:firstTokenBalances,defaultValue:firstTokenBalance,onInput:function onInput(ev){return _this3.setState({firstTokenBalance:ev.target.value});}}),_react2.default.createElement("div",{className:"invalid-feedback text-left text-danger"},errorMessageFirstToken))),_react2.default.createElement("div",{className:"row mt-4"},_react2.default.createElement("div",{className:"col-md-6"},_react2.default.createElement("label",null,(0,_i18n.tu)("name_of_the_token")),_react2.default.createElement("select",{className:"custom-select",value:secondTokenId,onChange:function onChange(e){_this3.secondTokenIdChange(e.target.value);}},// !secTokenIdArr.length
//     ?
//     option_t("select_the_name_of_the_Token")
//     :
//     secTokenIdArr.map((token, index) => {
//     return (
//         <option key={index} value={token.second_token_id}>{token.second_token_id}</option>
//     )
// })
_react2.default.createElement("option",{value:"TRX"},"TRX"))),_react2.default.createElement("div",{className:"col-md-6"},_react2.default.createElement("label",null,(0,_i18n.tu)("balance"),secTokenAmount>=0?_react2.default.createElement("span",null,"(",secTokenAmount,")"):""),_react2.default.createElement("input",{className:"form-control"+(secondTokenBalance.length!==0&&!isValid2?" is-invalid":""),type:"text",placeholder:intl.formatMessage({id:'enter_the_amount'}),max:secTokenBalances,defaultValue:secondTokenBalance,onInput:function onInput(ev){return _this3.setState({secondTokenBalance:ev.target.value});}}),_react2.default.createElement("div",{className:"invalid-feedback text-left text-danger"},errorMessageSecondToken))),this.state.firstTokenId&&this.state.firstTokenBalance&&this.state.secondTokenBalance>=this.props.dealPairTrxLimit?_react2.default.createElement("div",{className:"row mt-4"},_react2.default.createElement("div",{className:"col-md-12"},(0,_i18n.tu)('publish_price'),":",_react2.default.createElement("span",null,this.state.firstTokenId,"/TRX \u2248 ",(this.state.secondTokenBalance/this.state.firstTokenBalance).toFixed(6)))):null,_react2.default.createElement("div",{className:"pt-4"},_react2.default.createElement("p",{className:"text-center"},_react2.default.createElement("button",{disabled:disabled||!isValid||!isValid2,className:"btn btn-danger",style:{width:'100%'},onClick:this.create},(0,_i18n.tu)("create_trading_pairs"))))));}}]);return CreateTxnPairModal;}(_react2.default.PureComponent);function mapStateToProps(state){return{account:state.app.account,wallet:state.wallet,currentWallet:state.wallet.current};}var mapDispatchToProps={reloadWallet:_wallet.reloadWallet};exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)((0,_reactIntl.injectIntl)(CreateTxnPairModal));

/***/ }),

/***/ 2939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _regenerator=__webpack_require__(10);var _regenerator2=_interopRequireDefault(_regenerator);var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactRedux=__webpack_require__(19);var _reactIntl=__webpack_require__(11);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactstrap=__webpack_require__(60);var _i18n=__webpack_require__(13);var _api=__webpack_require__(14);var _constants=__webpack_require__(22);var _wallet=__webpack_require__(223);var _Fields=__webpack_require__(2428);var _lodash=__webpack_require__(17);var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var OperateTxnPairModal=function(_React$PureComponent){_inherits(OperateTxnPairModal,_React$PureComponent);function OperateTxnPairModal(){var _this2=this;_classCallCheck(this,OperateTxnPairModal);var _this=_possibleConstructorReturn(this,(OperateTxnPairModal.__proto__||Object.getPrototypeOf(OperateTxnPairModal)).call(this));_this.isValid=function(){var tokenQuant=_this.state.tokenQuant;var _this$props=_this.props,inject=_this$props.inject,currentWallet=_this$props.currentWallet;var tokenBalances=currentWallet.balance/1000000;if(!inject&&tokenQuant>=tokenBalances){return[false,(0,_i18n.tu)("withdraw_all")];}else if(_this.props.dealPairTrxLimit&&tokenQuant<_this.props.dealPairTrxLimit){return[false,(0,_i18n.tu)("pool_revert")];}if(!/^([1-9][0-9]+|[1-9])$/.test(tokenQuant)){return[false,(0,_i18n.tu)("operate_txn_pair_message")];}return[true];};_this.hideModal=function(){_this.setState({modal:null});};_this.inject=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee(){var _this$props2,onInject,exchange,tokenQuant,tokenId,quant;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$props2=_this.props,onInject=_this$props2.onInject,exchange=_this$props2.exchange;tokenQuant=_this.state.tokenQuant;tokenId="_";quant=parseFloat(tokenQuant*_constants.ONE_TRX);onInject&&onInject(exchange.exchange_id,tokenId,quant);_this.setState({disabled:true});case 6:case"end":return _context.stop();}}},_callee,_this2);}));_this.withdraw=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee2(){var _this$props3,onWithdraw,exchange,tokenQuant,tokenId,quant;return _regenerator2.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_this$props3=_this.props,onWithdraw=_this$props3.onWithdraw,exchange=_this$props3.exchange;tokenQuant=_this.state.tokenQuant;// if(tokenId == "TRX"){
//     tokenId = "_";
//     tokenQuant = parseFloat(tokenQuant * ONE_TRX);
// }else{
//     tokenQuant = parseFloat(tokenQuant)
// }
tokenId="_";quant=parseFloat(tokenQuant*_constants.ONE_TRX);onWithdraw&&onWithdraw(exchange.exchange_id,tokenId,quant);_this.setState({disabled:true});case 6:case"end":return _context2.stop();}}},_callee2,_this2);}));_this.cancel=function(){var onCancel=_this.props.onCancel;onCancel&&onCancel();};_this.tokenIdChange=function(value){var _this$props4=_this.props,currentWallet=_this$props4.currentWallet,exchange=_this$props4.exchange;var tokenBalances=exchange.first_token_id==value?exchange.first_token_balance:exchange.second_token_balance;_this.setState({tokenId:value,tokenBalances:tokenBalances},function(){});};_this.state={tokenId:"_",tokenBalances:"",tokenQuant:"",disabled:false};return _this;}_createClass(OperateTxnPairModal,[{key:"render",value:function render(){var _this3=this;var _props=this.props,exchange=_props.exchange,inject=_props.inject,intl=_props.intl,dealPairTrxLimit=_props.dealPairTrxLimit;var exchangeToken=[];var firstTokenId=exchange.first_token_id=="_"?"TRX":exchange.first_token_id;var secondTokenId=exchange.second_token_id=="_"?"TRX":exchange.second_token_id;exchangeToken.push(firstTokenId);exchangeToken.push(secondTokenId);var _state=this.state,modal=_state.modal,tokenId=_state.tokenId,tokenQuant=_state.tokenQuant,disabled=_state.disabled,tokenBalances=_state.tokenBalances;var _isValid=this.isValid(),_isValid2=_slicedToArray(_isValid,2),isValid=_isValid2[0],errorMessage=_isValid2[1];if(modal){return modal;}return _react2.default.createElement(_reactstrap.Modal,{isOpen:true,toggle:this.cancel,fade:false,size:"md",className:"modal-dialog-centered"},_react2.default.createElement(_reactstrap.ModalHeader,{className:"text-center",toggle:this.cancel},inject?(0,_i18n.tu)("capital_injection"):(0,_i18n.tu)("capital_withdrawal")),_react2.default.createElement(_reactstrap.ModalBody,null,_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-md-12"},inject?_react2.default.createElement("label",null,(0,_i18n.tu)("choose_a_Token_for_capital_injection")):_react2.default.createElement("label",null,(0,_i18n.tu)("choose_a_Token_for_capital_withdrawal")),_react2.default.createElement("select",{className:"custom-select",defaultValue:"TRX",onChange:function onChange(e){_this3.tokenIdChange(e.target.value);}},// exchangeToken.map((token, index) => {
//     return (
//         <option key={index} value={token}>{token}</option>
//     )
// })
_react2.default.createElement("option",{value:"TRX"},"TRX")))),_react2.default.createElement("div",{className:"row mt-3"},_react2.default.createElement("div",{className:"col-md-12"},inject?_react2.default.createElement("label",null,(0,_i18n.tu)("injection_amount")):_react2.default.createElement("label",null,(0,_i18n.tu)("withdrawal_amount")),_react2.default.createElement("input",{className:"form-control text-center "+(tokenQuant.length!==0&&!isValid?" is-invalid":""),type:"text",placeholder:intl.formatMessage({id:'enter_the_amount'}),defaultValue:tokenQuant,onInput:function onInput(ev){return _this3.setState({tokenQuant:ev.target.value});}}),_react2.default.createElement("div",{className:"invalid-feedback text-center text-danger"},errorMessage))),_react2.default.createElement("div",{className:"pt-4"},_react2.default.createElement("p",{className:"text-center"},inject?_react2.default.createElement("button",{disabled:disabled||!isValid,className:"btn btn-success",style:{width:'100%'},onClick:this.inject},(0,_i18n.tu)("capital_injection")):_react2.default.createElement("button",{disabled:this.state.tokenQuant===''||this.state.tokenQuant>exchange.second_token_balance-dealPairTrxLimit,className:"btn btn-warning",style:{width:'100%'},onClick:this.withdraw},(0,_i18n.tu)("capital_withdrawal"))))));}}]);return OperateTxnPairModal;}(_react2.default.PureComponent);function mapStateToProps(state){return{account:state.app.account,wallet:state.wallet,currentWallet:state.wallet.current};}var mapDispatchToProps={reloadWallet:_wallet.reloadWallet};exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)((0,_reactIntl.injectIntl)(OperateTxnPairModal));

/***/ }),

/***/ 2940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _regenerator=__webpack_require__(10);var _regenerator2=_interopRequireDefault(_regenerator);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _i18n=__webpack_require__(13);var _async=__webpack_require__(2558);var _index=__webpack_require__(30);var _index2=_interopRequireDefault(_index);var _reactIntl=__webpack_require__(11);var _reactBootstrapSweetalert=__webpack_require__(83);var _reactBootstrapSweetalert2=_interopRequireDefault(_reactBootstrapSweetalert);var _constants=__webpack_require__(22);var _reactstrap=__webpack_require__(60);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TestNetRequest=function(_React$Component){_inherits(TestNetRequest,_React$Component);function TestNetRequest(){var _this2=this;_classCallCheck(this,TestNetRequest);var _this=_possibleConstructorReturn(this,(TestNetRequest.__proto__||Object.getPrototypeOf(TestNetRequest)).call(this));_this.onVerify=function(code){_this.setState({verificationCode:code});};_this.onExpired=function(){_this.setState({verificationCode:null});};_this.onLoad=function(args){};_this.requestTrx=_asyncToGenerator(/*#__PURE__*/_regenerator2.default.mark(function _callee(){var _this$props,account,onRequested,verificationCode,address,_ref2,data,success,message,code,amount;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$props=_this.props,account=_this$props.account,onRequested=_this$props.onRequested;verificationCode=_this.state.verificationCode;_this.setState({waitingForTrx:true});_context.prev=3;address=account.address;_context.next=7;return _index2.default.post(_constants.API_URL+"/api/testnet/request-coins",{address:address,captchaCode:verificationCode});case 7:_ref2=_context.sent;data=_ref2.data;success=data.success,message=data.message,code=data.code,amount=data.amount;if(success){_this.setState({success:true,modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{success:true,title:(0,_i18n.tu)("trx_received"),onConfirm:_this.hideModal},_react2.default.createElement(_reactIntl.FormattedNumber,{value:amount/_constants.ONE_TRX})," TRX ",(0,_i18n.tu)("have_been_added_to_your_account"))});}else if(code==="CONTRACT_VALIDATE_ERROR"){_this.setState({verificationCode:null,modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{danger:true,title:(0,_i18n.tu)("error"),onConfirm:_this.hideModal},(0,_i18n.tu)("test_trx_temporarily_unavailable_message"))});}else{_this.setState({verificationCode:null,modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{danger:true,title:"Error",onConfirm:_this.hideModal},message)});}onRequested&&onRequested();_context.next=17;break;case 14:_context.prev=14;_context.t0=_context["catch"](3);_this.setState({verificationCode:null,modal:_react2.default.createElement(_reactBootstrapSweetalert2.default,{danger:true,title:"TRX Received",onConfirm:_this.hideModal},(0,_i18n.tu)("An_unknown_error_occurred,_please_try_again_in_a_few_minutes"))});case 17:_context.prev=17;_this.setState({waitingForTrx:false});return _context.finish(17);case 20:case"end":return _context.stop();}}},_callee,_this2,[[3,14,17,20]]);}));_this.hideModal=function(){_this.setState({modal:null});};_this.canRequest=function(){var _this$state=_this.state,verificationCode=_this$state.verificationCode,waitingForTrx=_this$state.waitingForTrx;return!waitingForTrx&&!!verificationCode;};_this.state={modal:null,verificationCode:null,success:false,waitingForTrx:false};return _this;}_createClass(TestNetRequest,[{key:"render",value:function render(){var _state=this.state,modal=_state.modal,success=_state.success;return _react2.default.createElement("div",null,modal,_react2.default.createElement("p",{className:"pt-1"},(0,_i18n.tu)("information_message_1")),success?_react2.default.createElement(_reactstrap.Alert,{color:"success"},(0,_i18n.tu)("information_message_3")):_react2.default.createElement(_react2.default.Fragment,null,_react2.default.createElement("p",{className:"d-flex justify-content-center"},_react2.default.createElement(_async.RecaptchaAsync,{sitekey:"6Le7AV4UAAAAADGmYVtg_lZuLj3w9xjwd7-P3gqX",render:"explicit",onloadCallback:this.onLoad,expiredCallback:this.onExpired,verifyCallback:this.onVerify})),_react2.default.createElement("button",{className:"btn btn-secondary",onClick:this.requestTrx,disabled:!this.canRequest()},(0,_i18n.tu)("request_trx_for_testing"))));}}]);return TestNetRequest;}(_react2.default.Component);exports.default=TestNetRequest;

/***/ })

});
//# sourceMappingURL=Account.0fbbcefd.chunk.js.map