import {Entity, OperationError} from './index';
import {TeamsAsyncOperationStatus} from './teamsAsyncOperationStatus';
import {TeamsAsyncOperationType} from './teamsAsyncOperationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAsyncOperation extends Entity, Partial<Parsable> {
    /** Number of times the operation was attempted before being marked successful or failed. */
    attemptsCount?: number;
    /** Time when the operation was created. */
    createdDateTime?: Date;
    /** The error property */
    error_escaped?: OperationError;
    /** Time when the async operation was last updated. */
    lastActionDateTime?: Date;
    /** The operationType property */
    operationType?: TeamsAsyncOperationType;
    /** The status property */
    status?: TeamsAsyncOperationStatus;
    /** The ID of the object that's created or modified as result of this async operation, typically a team. */
    targetResourceId?: string;
    /** The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths. */
    targetResourceLocation?: string;
}
