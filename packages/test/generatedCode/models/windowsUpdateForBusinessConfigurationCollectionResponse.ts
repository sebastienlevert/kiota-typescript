import {BaseCollectionPaginationCountResponse, WindowsUpdateForBusinessConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsUpdateForBusinessConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsUpdateForBusinessConfiguration[];
}
