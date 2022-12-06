import {deserializeIntoEntity} from './deserializeIntoEntity';
import {RemoteAssistancePartner} from './index';
import {RemoteAssistanceOnboardingStatus} from './remoteAssistanceOnboardingStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoteAssistancePartner(remoteAssistancePartner: RemoteAssistancePartner | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(remoteAssistancePartner),
        "displayName": n => { remoteAssistancePartner.displayName = n.getStringValue() as any ; },
        "lastConnectionDateTime": n => { remoteAssistancePartner.lastConnectionDateTime = n.getDateValue() as any ; },
        "onboardingStatus": n => { remoteAssistancePartner.onboardingStatus = n.getEnumValue<RemoteAssistanceOnboardingStatus>(RemoteAssistanceOnboardingStatus) as any ; },
        "onboardingUrl": n => { remoteAssistancePartner.onboardingUrl = n.getStringValue() as any ; },
    }
}
