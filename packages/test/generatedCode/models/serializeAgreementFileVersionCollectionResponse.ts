import {AgreementFileVersionCollectionResponse} from './index';
import {serializeAgreementFileVersion} from './serializeAgreementFileVersion';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileVersionCollectionResponse(writer: SerializationWriter, agreementFileVersionCollectionResponse: AgreementFileVersionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementFileVersionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", agreementFileVersionCollectionResponse.value as any, serializeAgreementFileVersion);
}
