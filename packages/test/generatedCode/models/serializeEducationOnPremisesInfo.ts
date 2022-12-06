import {EducationOnPremisesInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationOnPremisesInfo(writer: SerializationWriter, educationOnPremisesInfo: EducationOnPremisesInfo | undefined = {}) : void {
            writer.writeStringValue("immutableId", educationOnPremisesInfo.immutableId);
            writer.writeStringValue("@odata.type", educationOnPremisesInfo.odataType);
}
