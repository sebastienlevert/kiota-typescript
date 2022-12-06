import {Entity, ShiftPreferences} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSettings extends Entity, Partial<Parsable> {
    /** The contributionToContentDiscoveryAsOrganizationDisabled property */
    contributionToContentDiscoveryAsOrganizationDisabled?: boolean;
    /** The contributionToContentDiscoveryDisabled property */
    contributionToContentDiscoveryDisabled?: boolean;
    /** The shiftPreferences property */
    shiftPreferences?: ShiftPreferences;
}
