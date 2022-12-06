import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TelecomExpenseManagementPartner extends Entity, Partial<Parsable> {
    /** Whether the partner's AAD app has been authorized to access Intune. */
    appAuthorized?: boolean;
    /** Display name of the TEM partner. */
    displayName?: string;
    /** Whether Intune's connection to the TEM service is currently enabled or disabled. */
    enabled?: boolean;
    /** Timestamp of the last request sent to Intune by the TEM partner. */
    lastConnectionDateTime?: Date;
    /** URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service. */
    url?: string;
}
