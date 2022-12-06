import {BaseCollectionPaginationCountResponse, EditionUpgradeConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EditionUpgradeConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EditionUpgradeConfiguration[];
}
