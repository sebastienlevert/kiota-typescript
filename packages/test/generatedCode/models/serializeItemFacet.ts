import {AllowedAudiences} from './allowedAudiences';
import {ItemFacet} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeInferenceData} from './serializeInferenceData';
import {serializePersonDataSources} from './serializePersonDataSources';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemFacet(writer: SerializationWriter, itemFacet: ItemFacet | undefined = {}) : void {
        serializeEntity(writer, itemFacet)
            writer.writeEnumValue<AllowedAudiences>("allowedAudiences", itemFacet.allowedAudiences);
            writer.writeObjectValueFromMethod("createdBy", itemFacet.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", itemFacet.createdDateTime);
            writer.writeObjectValueFromMethod("inference", itemFacet.inference as any, serializeInferenceData);
            writer.writeBooleanValue("isSearchable", itemFacet.isSearchable);
            writer.writeObjectValueFromMethod("lastModifiedBy", itemFacet.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", itemFacet.lastModifiedDateTime);
            writer.writeObjectValueFromMethod("source", itemFacet.source as any, serializePersonDataSources);
}
