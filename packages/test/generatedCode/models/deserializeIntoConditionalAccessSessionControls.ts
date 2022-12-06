import {deserializeIntoApplicationEnforcedRestrictionsSessionControl} from './deserializeIntoApplicationEnforcedRestrictionsSessionControl';
import {deserializeIntoCloudAppSecuritySessionControl} from './deserializeIntoCloudAppSecuritySessionControl';
import {deserializeIntoPersistentBrowserSessionControl} from './deserializeIntoPersistentBrowserSessionControl';
import {deserializeIntoSignInFrequencySessionControl} from './deserializeIntoSignInFrequencySessionControl';
import {ConditionalAccessSessionControls} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessSessionControls(conditionalAccessSessionControls: ConditionalAccessSessionControls | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationEnforcedRestrictions": n => { conditionalAccessSessionControls.applicationEnforcedRestrictions = n.getObject(deserializeIntoApplicationEnforcedRestrictionsSessionControl) as any ; },
        "cloudAppSecurity": n => { conditionalAccessSessionControls.cloudAppSecurity = n.getObject(deserializeIntoCloudAppSecuritySessionControl) as any ; },
        "disableResilienceDefaults": n => { conditionalAccessSessionControls.disableResilienceDefaults = n.getBooleanValue() as any ; },
        "@odata.type": n => { conditionalAccessSessionControls.odataType = n.getStringValue() as any ; },
        "persistentBrowser": n => { conditionalAccessSessionControls.persistentBrowser = n.getObject(deserializeIntoPersistentBrowserSessionControl) as any ; },
        "signInFrequency": n => { conditionalAccessSessionControls.signInFrequency = n.getObject(deserializeIntoSignInFrequencySessionControl) as any ; },
    }
}
