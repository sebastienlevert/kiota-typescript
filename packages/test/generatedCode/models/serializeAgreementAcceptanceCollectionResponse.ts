import {AgreementAcceptanceCollectionResponse} from './index';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementAcceptanceCollectionResponse(writer: SerializationWriter, agreementAcceptanceCollectionResponse: AgreementAcceptanceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementAcceptanceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", agreementAcceptanceCollectionResponse.value as any, serializeAgreementAcceptance);
}
