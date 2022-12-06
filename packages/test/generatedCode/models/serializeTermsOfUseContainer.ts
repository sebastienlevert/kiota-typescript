import {TermsOfUseContainer} from './index';
import {serializeAgreement} from './serializeAgreement';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsOfUseContainer(writer: SerializationWriter, termsOfUseContainer: TermsOfUseContainer | undefined = {}) : void {
        serializeEntity(writer, termsOfUseContainer)
            writer.writeCollectionOfObjectValuesFromMethod("agreementAcceptances", termsOfUseContainer.agreementAcceptances as any, serializeAgreementAcceptance);
            writer.writeCollectionOfObjectValuesFromMethod("agreements", termsOfUseContainer.agreements as any, serializeAgreement);
}
