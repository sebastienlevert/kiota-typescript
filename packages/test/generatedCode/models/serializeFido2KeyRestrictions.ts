import {Fido2RestrictionEnforcementType} from './fido2RestrictionEnforcementType';
import {Fido2KeyRestrictions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFido2KeyRestrictions(writer: SerializationWriter, fido2KeyRestrictions: Fido2KeyRestrictions | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("aaGuids", fido2KeyRestrictions.aaGuids);
            writer.writeEnumValue<Fido2RestrictionEnforcementType>("enforcementType", fido2KeyRestrictions.enforcementType);
            writer.writeBooleanValue("isEnforced", fido2KeyRestrictions.isEnforced);
            writer.writeStringValue("@odata.type", fido2KeyRestrictions.odataType);
}
