import {MobileAppTroubleshootingEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppTroubleshootingEvent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppTroubleshootingEvent();
}
