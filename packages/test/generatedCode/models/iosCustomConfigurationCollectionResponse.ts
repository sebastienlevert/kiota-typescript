import {BaseCollectionPaginationCountResponse, IosCustomConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosCustomConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosCustomConfiguration[];
}
