import {BaseCollectionPaginationCountResponse, IosVppApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosVppAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosVppApp[];
}
