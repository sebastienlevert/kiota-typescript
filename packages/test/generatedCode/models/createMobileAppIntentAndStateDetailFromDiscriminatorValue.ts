import {MobileAppIntentAndStateDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppIntentAndStateDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppIntentAndStateDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppIntentAndStateDetail();
}
