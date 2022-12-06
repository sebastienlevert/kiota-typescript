import {BaseCollectionPaginationCountResponse, IosVppEBookAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosVppEBookAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosVppEBookAssignment[];
}
