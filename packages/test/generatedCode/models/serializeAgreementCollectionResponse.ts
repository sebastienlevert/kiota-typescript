import {AgreementCollectionResponse} from './index';
import {serializeAgreement} from './serializeAgreement';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementCollectionResponse(writer: SerializationWriter, agreementCollectionResponse: AgreementCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", agreementCollectionResponse.value as any, serializeAgreement);
}
