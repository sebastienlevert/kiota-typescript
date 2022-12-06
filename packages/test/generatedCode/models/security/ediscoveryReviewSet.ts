import {DataSet, EdiscoveryReviewSetQuery} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewSet extends DataSet, Partial<Parsable> {
    /** Represents queries within the review set. */
    queries?: EdiscoveryReviewSetQuery[];
}
