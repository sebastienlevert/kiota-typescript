import {BaseCollectionPaginationCountResponse, IosUpdateConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosUpdateConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosUpdateConfiguration[];
}
