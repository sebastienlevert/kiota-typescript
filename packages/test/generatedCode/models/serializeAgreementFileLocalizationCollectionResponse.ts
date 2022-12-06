import {AgreementFileLocalizationCollectionResponse} from './index';
import {serializeAgreementFileLocalization} from './serializeAgreementFileLocalization';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileLocalizationCollectionResponse(writer: SerializationWriter, agreementFileLocalizationCollectionResponse: AgreementFileLocalizationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, agreementFileLocalizationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", agreementFileLocalizationCollectionResponse.value as any, serializeAgreementFileLocalization);
}
