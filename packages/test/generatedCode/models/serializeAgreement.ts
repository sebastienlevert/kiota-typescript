import {Agreement} from './index';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import {serializeAgreementFile} from './serializeAgreementFile';
import {serializeAgreementFileLocalization} from './serializeAgreementFileLocalization';
import {serializeEntity} from './serializeEntity';
import {serializeTermsExpiration} from './serializeTermsExpiration';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreement(writer: SerializationWriter, agreement: Agreement | undefined = {}) : void {
        serializeEntity(writer, agreement)
            writer.writeCollectionOfObjectValuesFromMethod("acceptances", agreement.acceptances as any, serializeAgreementAcceptance);
            writer.writeStringValue("displayName", agreement.displayName);
            writer.writeObjectValueFromMethod("file", agreement.file as any, serializeAgreementFile);
            writer.writeCollectionOfObjectValuesFromMethod("files", agreement.files as any, serializeAgreementFileLocalization);
            writer.writeBooleanValue("isPerDeviceAcceptanceRequired", agreement.isPerDeviceAcceptanceRequired);
            writer.writeBooleanValue("isViewingBeforeAcceptanceRequired", agreement.isViewingBeforeAcceptanceRequired);
            writer.writeObjectValueFromMethod("termsExpiration", agreement.termsExpiration as any, serializeTermsExpiration);
            writer.writeDurationValue("userReacceptRequiredFrequency", agreement.userReacceptRequiredFrequency);
}
