import {BitlockerRecoveryKey, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Bitlocker extends Entity, Partial<Parsable> {
    /** The recovery keys associated with the bitlocker entity. */
    recoveryKeys?: BitlockerRecoveryKey[];
}
