const pool = require("../config/db");

const saveDocument = async (filename) => {
  const result = await pool.query(
    `
    INSERT INTO documents (filename)
    VALUES ($1)
    RETURNING id
    `,
    [filename]
  );

  return result.rows[0].id;
};

const saveChunk = async (
  documentId,
  chunkText
) => {
  await pool.query(
    `
    INSERT INTO chunks
    (document_id, chunk_text)
    VALUES ($1, $2)
    `,
    [documentId, chunkText]
  );
};

module.exports = {
  saveDocument,
  saveChunk,
};