import {Entity} from './index';
import {RemoteAssistanceOnboardingStatus} from './remoteAssistanceOnboardingStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteAssistancePartner extends Entity, Partial<Parsable> {
    /** Display name of the partner. */
    displayName?: string;
    /** Timestamp of the last request sent to Intune by the TEM partner. */
    lastConnectionDateTime?: Date;
    /** The current TeamViewer connector status */
    onboardingStatus?: RemoteAssistanceOnboardingStatus;
    /** URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service. */
    onboardingUrl?: string;
}
