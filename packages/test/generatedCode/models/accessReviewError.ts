import {GenericError} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewError extends GenericError, Partial<Parsable> {
}
