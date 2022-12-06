import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {Windows10SecureAssessmentConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10SecureAssessmentConfiguration(windows10SecureAssessmentConfiguration: Windows10SecureAssessmentConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10SecureAssessmentConfiguration),
        "allowPrinting": n => { windows10SecureAssessmentConfiguration.allowPrinting = n.getBooleanValue() as any ; },
        "allowScreenCapture": n => { windows10SecureAssessmentConfiguration.allowScreenCapture = n.getBooleanValue() as any ; },
        "allowTextSuggestion": n => { windows10SecureAssessmentConfiguration.allowTextSuggestion = n.getBooleanValue() as any ; },
        "configurationAccount": n => { windows10SecureAssessmentConfiguration.configurationAccount = n.getStringValue() as any ; },
        "launchUri": n => { windows10SecureAssessmentConfiguration.launchUri = n.getStringValue() as any ; },
    }
}
