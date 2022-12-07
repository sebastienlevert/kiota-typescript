import {AppIdentity, Entity, PrintTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskDefinition extends Entity, Partial<Parsable> {
    /** The createdBy property */
    createdBy?: AppIdentity;
    /** The name of the printTaskDefinition. */
    displayName?: string;
    /** A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only. */
    tasks?: PrintTask[];
}
