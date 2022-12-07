import {createCommentActionFromDiscriminatorValue} from './createCommentActionFromDiscriminatorValue';
import {createCreateActionFromDiscriminatorValue} from './createCreateActionFromDiscriminatorValue';
import {createDeleteActionFromDiscriminatorValue} from './createDeleteActionFromDiscriminatorValue';
import {createEditActionFromDiscriminatorValue} from './createEditActionFromDiscriminatorValue';
import {createMentionActionFromDiscriminatorValue} from './createMentionActionFromDiscriminatorValue';
import {createMoveActionFromDiscriminatorValue} from './createMoveActionFromDiscriminatorValue';
import {createRenameActionFromDiscriminatorValue} from './createRenameActionFromDiscriminatorValue';
import {createRestoreActionFromDiscriminatorValue} from './createRestoreActionFromDiscriminatorValue';
import {createShareActionFromDiscriminatorValue} from './createShareActionFromDiscriminatorValue';
import {createVersionActionFromDiscriminatorValue} from './createVersionActionFromDiscriminatorValue';
import {CommentAction, CreateAction, DeleteAction, EditAction, MentionAction, MoveAction, RenameAction, RestoreAction, ShareAction, VersionAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemActionSet implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The comment property */
    private _comment?: CommentAction | undefined;
    /** The create property */
    private _create?: CreateAction | undefined;
    /** The delete property */
    private _delete?: DeleteAction | undefined;
    /** The edit property */
    private _edit?: EditAction | undefined;
    /** The mention property */
    private _mention?: MentionAction | undefined;
    /** The move property */
    private _move?: MoveAction | undefined;
    /** The rename property */
    private _rename?: RenameAction | undefined;
    /** The restore property */
    private _restore?: RestoreAction | undefined;
    /** The share property */
    private _share?: ShareAction | undefined;
    /** The version property */
    private _version?: VersionAction | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the comment property value. The comment property
     * @returns a commentAction
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. The comment property
     * @param value Value to set for the comment property.
     */
    public set comment(value: CommentAction | undefined) {
        this._comment = value;
    };
    /**
     * Instantiates a new itemActionSet and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the create property value. The create property
     * @returns a createAction
     */
    public get create() {
        return this._create;
    };
    /**
     * Sets the create property value. The create property
     * @param value Value to set for the create property.
     */
    public set create(value: CreateAction | undefined) {
        this._create = value;
    };
    /**
     * Gets the delete property value. The delete property
     * @returns a deleteAction
     */
    public get delete() {
        return this._delete;
    };
    /**
     * Sets the delete property value. The delete property
     * @param value Value to set for the delete property.
     */
    public set delete(value: DeleteAction | undefined) {
        this._delete = value;
    };
    /**
     * Gets the edit property value. The edit property
     * @returns a editAction
     */
    public get edit() {
        return this._edit;
    };
    /**
     * Sets the edit property value. The edit property
     * @param value Value to set for the edit property.
     */
    public set edit(value: EditAction | undefined) {
        this._edit = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getObjectValue<CommentAction>(createCommentActionFromDiscriminatorValue); },
            "create": n => { this.create = n.getObjectValue<CreateAction>(createCreateActionFromDiscriminatorValue); },
            "delete": n => { this.delete = n.getObjectValue<DeleteAction>(createDeleteActionFromDiscriminatorValue); },
            "edit": n => { this.edit = n.getObjectValue<EditAction>(createEditActionFromDiscriminatorValue); },
            "mention": n => { this.mention = n.getObjectValue<MentionAction>(createMentionActionFromDiscriminatorValue); },
            "move": n => { this.move = n.getObjectValue<MoveAction>(createMoveActionFromDiscriminatorValue); },
            "rename": n => { this.rename = n.getObjectValue<RenameAction>(createRenameActionFromDiscriminatorValue); },
            "restore": n => { this.restore = n.getObjectValue<RestoreAction>(createRestoreActionFromDiscriminatorValue); },
            "share": n => { this.share = n.getObjectValue<ShareAction>(createShareActionFromDiscriminatorValue); },
            "version": n => { this.version = n.getObjectValue<VersionAction>(createVersionActionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the mention property value. The mention property
     * @returns a mentionAction
     */
    public get mention() {
        return this._mention;
    };
    /**
     * Sets the mention property value. The mention property
     * @param value Value to set for the mention property.
     */
    public set mention(value: MentionAction | undefined) {
        this._mention = value;
    };
    /**
     * Gets the move property value. The move property
     * @returns a moveAction
     */
    public get move() {
        return this._move;
    };
    /**
     * Sets the move property value. The move property
     * @param value Value to set for the move property.
     */
    public set move(value: MoveAction | undefined) {
        this._move = value;
    };
    /**
     * Gets the rename property value. The rename property
     * @returns a renameAction
     */
    public get rename() {
        return this._rename;
    };
    /**
     * Sets the rename property value. The rename property
     * @param value Value to set for the rename property.
     */
    public set rename(value: RenameAction | undefined) {
        this._rename = value;
    };
    /**
     * Gets the restore property value. The restore property
     * @returns a restoreAction
     */
    public get restore() {
        return this._restore;
    };
    /**
     * Sets the restore property value. The restore property
     * @param value Value to set for the restore property.
     */
    public set restore(value: RestoreAction | undefined) {
        this._restore = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<CommentAction>("comment", this.comment);
        writer.writeObjectValue<CreateAction>("create", this.create);
        writer.writeObjectValue<DeleteAction>("delete", this.delete);
        writer.writeObjectValue<EditAction>("edit", this.edit);
        writer.writeObjectValue<MentionAction>("mention", this.mention);
        writer.writeObjectValue<MoveAction>("move", this.move);
        writer.writeObjectValue<RenameAction>("rename", this.rename);
        writer.writeObjectValue<RestoreAction>("restore", this.restore);
        writer.writeObjectValue<ShareAction>("share", this.share);
        writer.writeObjectValue<VersionAction>("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the share property value. The share property
     * @returns a shareAction
     */
    public get share() {
        return this._share;
    };
    /**
     * Sets the share property value. The share property
     * @param value Value to set for the share property.
     */
    public set share(value: ShareAction | undefined) {
        this._share = value;
    };
    /**
     * Gets the version property value. The version property
     * @returns a versionAction
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version property
     * @param value Value to set for the version property.
     */
    public set version(value: VersionAction | undefined) {
        this._version = value;
    };
}
