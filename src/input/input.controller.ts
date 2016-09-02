/// <reference path="../core/systems.ts" />
/// <reference path="../common/common.ts" />

namespace Systems {
    export interface IInputController extends ISystem {

    }

    export class InputController implements IInputController {
        constructor() {
            this.init();
        }

        update(dt: number) {

        }

        init() {

        }

        sendMessage(msg: Common.IMessage) {

        }
    }
}