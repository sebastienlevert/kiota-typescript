import {MobileAppIntentAndState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppIntentAndStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppIntentAndState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppIntentAndState();
}
