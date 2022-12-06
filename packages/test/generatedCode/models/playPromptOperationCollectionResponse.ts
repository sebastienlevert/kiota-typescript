import {BaseCollectionPaginationCountResponse, PlayPromptOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlayPromptOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PlayPromptOperation[];
}
