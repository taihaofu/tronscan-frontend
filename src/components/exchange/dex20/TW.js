import { connect } from "react-redux";
import { injectIntl } from "react-intl";
// const contranctAddress = "TGq7uRgKED5G8kYpEoQybR9p9xtcVa5GTD"; //'TFFzJbnqNuochqPQtLrJgtJ695aRakfKiW' //'TPXkfbV6tdvbWt5vA261yNC3NCR6QHsrQe'
// /**
//  * 获取合约
//  */
// export async function getContract() {
//   return await window.tronWeb.contract().at(contranctAddress);
//   // return await tronWeb.contract().at(contranctAddress)
// }

// /**
//  * 撤单
//  */
// export async function cancelOrder(_id) {
//   const contract = await getContract();

//   const transactionID = contract
//     .cancelOrder(_id)
//     .send()
//     .catch(e => {});
//   return transactionID;
// }

/**
 * 获取token余额
 */

// export async function getBalance({ _tokenA, _uToken, _precision }) {
//   const contractInstance = await window.tronWeb.contract().at(_tokenA);

//   const _b = await contractInstance
//     .balanceOf(_uToken)
//     .call()
//     .catch(e => {});
//   let balance = 0;
//   if (_b.balance) {
//     balance = _b.balance.toString();
//   } else {
//     balance = _b.toString();
//   }
//   return balance / Math.pow(10, _precision) || 0;
// }

/**
 * 买单
 */
// export async function buyByContract({ _user, _tokenA, _amountA, _tokenB, _price, _amountB, tronweb }) {
//          let allowAmount = false;
//          let callValue = 0;
//          if (_tokenB === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb") {
//            // _tokenB = '410000000000000000000000000000000000000000'
//            allowAmount = true;
//            callValue = Math.round(_amountB);
//          } else {
//            allowAmount = await authorization(_user, _tokenB, Math.round(_amountB));
//          }
//          if (!allowAmount) return;
//          const _c = await getContract(tronweb);
//          const transactionID = _c
//            .buyOrder(
//              _tokenA,
//              Math.round(_amountA).toString(),
//              _tokenB,
//              Math.round(_amountB),
//              Math.round(_price)
//            )
//            .send({
//              callValue: callValue,
//              shouldPollResponse: false
//            });
//          return transactionID;
//        }
// /**
//  * 卖单
//  */
// export async function sellByContract({
//   _user,
//   _tokenA,
//   _amountA,
//   _tokenB,
//   _price,
//   _amountB
// }) {
//   let allowAmount = await authorization(_user, _tokenA, Math.round(_amountA));
//   if (!allowAmount) return;
//   const transactionID = (await getContract())
//     .sellOrder(
//       _tokenA,
//       Math.round(_amountA).toString(),
//       _tokenB,
//       Math.round(_amountB),
//       Math.round(_price)
//     )
//     .send();
//   // const transactionID = (await getContract()).sellOrder
//   return transactionID;
// }

// /**
//  * 授权
//  */
// export async function authorization(_user, _tokenA, _amountA) {
//   const newContract = await window.tronWeb.contract().at(_tokenA);
//   // const newContract = await tronWeb.contract().at(_tokenA)

//   const transactionID = await newContract
//     .approve(contranctAddress, _amountA.toString())
//     .send();

//   if (transactionID) {
//     let allowAmount = await newContract
//       .allowance(_user, contranctAddress)
//       .call();
//     if (allowAmount.remaining) {
//       allowAmount = allowAmount.remaining.toString();
//     } else {
//       allowAmount = allowAmount.toString();
//     }
//     return allowAmount;
//   }
// }

class ApiTW {
  constructor() {
    // **** test
    // this.contractAddress = "TPb1vyaZv59Mte7ABaRqTGCk4TaX1MzBUT";
    // this.contractAddress10 = "THxN2BbBHp5nam7ZQWPrgLoAju3KTDZcNg";
    // this.contractAddrUsdt20 = "TRxMaG7CwSfZdfho9KXtayDJUQEvvoCeKo"; //'TWe4z3uRvUoG9VBgoC8iSgHRtvxa9MJJPv'
    // this.contractAddrUsdt10 = "TJyrPWWP3sit856yTCJrd3cg2Uo82aZ7JN";

    // **** online
    this.contractAddress = "TSMbPm5mUsaTDSEjHCd55ZJaib3Ysvjyc5";
    this.contractAddress10 = "THnCkTX1GfDArAuyzzv2nGpDt4vChm8t2e";
    this.contractAddrUsdt20 = "TEpC1DGvDdfrDf83JZDUzdNZydeHz9w21H"; //'TWe4z3uRvUoG9VBgoC8iSgHRtvxa9MJJPv'
    this.contractAddrUsdt10 = "TCXvoCbb2ejaYHBRKKjtnkTCp8DFKTrLTj";
  }

  /**
   * 获取合约
   */
  async getContract(tronWeb, type) {
    let _this = this;
    let address = ""; //type === 1 ? contractV10Addr : contractAddress
    switch (type) {
      case 1:
        address = _this.contractAddress10;
        break;
      case 2:
        address = _this.contractAddress;
        break;
      case 3:
        address = _this.contractAddrUsdt20;
        break;
      case 4:
        address = _this.contractAddrUsdt10;
        break;
    }

    return await tronWeb.contract().at(address);
    // return await tronWeb.contract().at(contranctAddress)
  }

  async getContract10(tronWeb) {
    return await tronWeb.contract().at(this.contractAddress10);
    // return await tronWeb.contract().at(contranctAddress)
  }

  /**
   * 撤单
   */
  async cancelOrder(_id, tronWeb, pairType) {
    let contract;
    // if (pairType === 1) contract = await this.getContract10(tronWeb, pairType);
    // if (pairType === 2) contract = await this.getContract(tronWeb);
    contract = await this.getContract(tronWeb, pairType);
    const transactionID = contract
      .cancelOrder(_id)
      .send()
      .catch(e => {});
    return transactionID;
  }

  /**
   * 获取token余额
   */

  async getBalance({ _tokenA, _uToken, _precision, tronWeb }) {
    const contractInstance = await tronWeb.contract().at(_tokenA);
    const _b = await contractInstance.balanceOf(_uToken).call();
    let balance = 0;

    if (_b.balance) {
      balance = _b.balance.toString();
    } else {
      balance = _b.toString();
    }
    return balance / Math.pow(10, _precision) || 0;
  }

  /**
   * 获取10token余额
   */

  async getV10Balance({ _tokenA, _uToken, _precision, tronWeb }) {
    const _c = await this.getContract(tronWeb, 1);
    const _id = await _c.getTokenBalance(_uToken, _tokenA).call();
    return _id.toString() / Math.pow(10, _precision || 0);
  }

  /**
   * 买单
   */
  async buyByContract({
    _user,
    _tokenA,
    _amountA,
    _tokenB,
    _price,
    _amountB,
    _pairType,
    tronWeb
  }) {
    let transactionID;
    const _c = await this.getContract(tronWeb, _pairType);
    if (_pairType === 1) {
      transactionID = _c
        .buyOrder(
          _tokenA,
          Math.round(_amountA).toString(),
          Math.round(_amountB),
          Math.round(_price)
        )
        .send({
          callValue: Math.round(_amountB)
        });
    } else if (_pairType === 2) {
      let allowAmount = false;
      let callValue;
      if (_tokenB === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb") {
        allowAmount = true;
        callValue = Math.round(_amountB);
      } else {
        allowAmount = await this.authorization(
          _user,
          _tokenB,
          Math.round(_amountB),
          _pairType,
          tronWeb
        );
      }
      if (!allowAmount) return;

      transactionID = _c
        .buyOrder(
          _tokenA,
          Math.round(_amountA).toString(),
          _tokenB,
          Math.round(_amountB),
          Math.round(_price)
        )
        .send({
          callValue: Math.round(_amountB)
        });
    } else if (_pairType === 3 || _pairType === 4) {
      let allowAmount = await this.authorization(
        _user,
        _tokenB,
        Math.round(_amountB),
        _pairType,
        tronWeb
      );
      if (!allowAmount) return;
      transactionID = _c
        .buyOrder(
          _tokenA,
          Math.round(_amountA).toString(),
          _tokenB,
          Math.round(_amountB),
          Math.round(_price)
        )
        .send();
    }
    return transactionID;
    // let allowAmount = false;
    // let callValue = 0;

    // if (_tokenB === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb") {
    //   // _tokenB = '410000000000000000000000000000000000000000'
    //   allowAmount = true;
    //   callValue = Math.round(_amountB);
    // } else {
    //   allowAmount = await this.authorization(
    //     _user,
    //     _tokenB,
    //     Math.round(_amountB),
    //     tronWeb,
    //     tronWeb
    //   );
    // }
    // if (!allowAmount) return;
    // let _c;
    // let transactionID;
    // if (_pairType === 1) {
    //   _c = await this.getContract10(tronWeb);
    //   transactionID = _c
    //     .buyOrder(
    //       _tokenA,
    //       Math.round(_amountA).toString(),
    //       Math.round(_amountB),
    //       Math.round(_price)
    //     )
    //     .send({
    //       callValue: Math.round(_amountB)
    //     });
    // }
    // if (_pairType === 2) {
    //   _c = await this.getContract(tronWeb);
    //   transactionID = _c
    //     .buyOrder(
    //       _tokenA,
    //       Math.round(_amountA).toString(),
    //       _tokenB,
    //       Math.round(_amountB),
    //       Math.round(_price)
    //     )
    //     .send({
    //       callValue: callValue,
    //       shouldPollResponse: false
    //     });
    // }

    // return transactionID;
  }
  /**
   * 卖单
   */
  async sellByContract({
    _user,
    _tokenA,
    _amountA,
    _tokenB,
    _price,
    _amountB,
    _pairType,
    tronWeb
  }) {
    let transactionID;
    const _c = await this.getContract(tronWeb, _pairType);
    if (_pairType === 1) {
      transactionID = _c
        .sellOrder(
          _tokenA,
          Math.round(_amountA).toString(),
          Math.round(_amountB),
          Math.round(_price)
        )
        .send({
          tokenValue: Math.round(_amountA).toString(),
          tokenId: _tokenA
        });
    } else if (_pairType === 2) {
      let allowAmount = await this.authorization(
        _user,
        _tokenA,
        // Math.round(_amountA),
        Math.round(
          _tokenA == "TUL5yxRKeSWvceLZ3BSU5iNJcQmNxkWayh"
            ? _amountA + 100000
            : _amountA
        ),
        _pairType,
        tronWeb
      );
      if (!allowAmount) return;
      transactionID = _c
        .sellOrder(
          _tokenA,
          Math.round(_amountA).toString(),
          _tokenB,
          Math.round(_amountB),
          Math.round(_price)
        )
        .send();
    } else if (_pairType === 3) {
      let allowAmount = false;
      let callValue = 0;
      if (_tokenA === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb") {
        allowAmount = true;
        callValue = Math.round(_amountA);
      } else {
        allowAmount = await this.authorization(
          _user,
          _tokenA,
          Math.round(_amountA),
          _pairType
        );
      }
      if (!allowAmount) return;

      transactionID = _c
        .sellOrder(
          _tokenA,
          Math.round(_amountA).toString(),
          _tokenB,
          Math.round(_amountB),
          Math.round(_price)
        )
        .send({
          callValue: callValue
        });
    } else if (_pairType === 4) {
      transactionID = _c
        .sellOrder(
          _tokenA,
          Math.round(_amountA).toString(),
          _tokenB,
          Math.round(_amountB),
          Math.round(_price)
        )
        .send({
          tokenValue: Math.round(_amountA).toString(),
          tokenId: _tokenA
        });
    }

    // const transactionID = (await getContract()).sellOrder
    return transactionID;

    // if (_pairType === 2) {
    //   let allowAmount = await this.authorization(
    //     _user,
    //     _tokenA,
    //     Math.round(_amountA),
    //     tronWeb
    //   );
    //   if (!allowAmount) return;
    // }
    // let _c;
    // let transactionID;
    // if (_pairType === 1) {
    //   _c = await this.getContract10(tronWeb);
    //   transactionID = _c
    //     .sellOrder(
    //       _tokenA,
    //       Math.round(_amountA).toString(),
    //       Math.round(_amountB),
    //       Math.round(_price)
    //     )
    //     .send({
    //       tokenValue: Math.round(_amountA).toString(),
    //       tokenId: _tokenA
    //     });
    // }
    // if (_pairType === 2) {
    //   _c = await this.getContract(tronWeb);
    //   transactionID = _c
    //     .sellOrder(
    //       _tokenA,
    //       Math.round(_amountA).toString(),
    //       _tokenB,
    //       Math.round(_amountB),
    //       Math.round(_price)
    //     )
    //     .send();
    // }

    // const transactionID = (await getContract()).sellOrder
    // return transactionID;
  }

  /**
   * 授权
   */
  async authorization(_user, _tokenA, _amountA, _type, tronWeb) {
    const newContract = await tronWeb.contract().at(_tokenA);
    let address = "";
    switch (_type) {
      case 1:
        address = this.contractV10Addr;
        break;
      case 2:
        address = this.contractAddress;
        break;
      case 3:
        address = this.contractAddrUsdt20;
        break;
      case 4:
        address = this.contractAddrUsdt10;
        break;
    }
    const transactionID = await newContract
      .approve(address, _amountA.toString())
      .send();

    if (transactionID) {
      let allowAmount = await newContract.allowance(_user, address).call();
      if (allowAmount.remaining) {
        allowAmount = allowAmount.remaining.toString();
      } else {
        allowAmount = allowAmount.toString();
      }
      return allowAmount;
    }

    // const newContract = await tronWeb.contract().at(_tokenA)

    // const transactionID = await newContract
    //   .approve(this.contranctAddress, _amountA.toString())
    //   .send();

    // if (transactionID) {
    //   let allowAmount = await newContract
    //     .allowance(_user, this.contranctAddress)
    //     .call();
    //   if (allowAmount.remaining) {
    //     allowAmount = allowAmount.remaining.toString();
    //   } else {
    //     allowAmount = allowAmount.toString();
    //   }
    //   return allowAmount;
    // }
  }
}

export const TW = new ApiTW();
