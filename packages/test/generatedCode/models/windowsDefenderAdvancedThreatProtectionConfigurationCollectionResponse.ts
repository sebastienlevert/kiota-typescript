import {BaseCollectionPaginationCountResponse, WindowsDefenderAdvancedThreatProtectionConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsDefenderAdvancedThreatProtectionConfiguration[];
}
