import {Fido2RestrictionEnforcementType} from './fido2RestrictionEnforcementType';
import {Fido2KeyRestrictions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2KeyRestrictions(fido2KeyRestrictions: Fido2KeyRestrictions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aaGuids": n => { fido2KeyRestrictions.aaGuids = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "enforcementType": n => { fido2KeyRestrictions.enforcementType = n.getEnumValue<Fido2RestrictionEnforcementType>(Fido2RestrictionEnforcementType) as any ; },
        "isEnforced": n => { fido2KeyRestrictions.isEnforced = n.getBooleanValue() as any ; },
        "@odata.type": n => { fido2KeyRestrictions.odataType = n.getStringValue() as any ; },
    }
}
