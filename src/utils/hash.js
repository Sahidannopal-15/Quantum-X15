import jsSHA from "jssha";

export async function hashFile(file, algorithm = "SHA-256") {
  const CHUNK_SIZE = 4 * 1024 * 1024; 
  const sha = new jsSHA(algorithm, "ARRAYBUFFER");

  let offset = 0;
  while (offset < file.size) {
    const chunk = file.slice(offset, offset + CHUNK_SIZE);
    const buffer = await chunk.arrayBuffer();
    sha.update(buffer);
    offset += CHUNK_SIZE;
}

  return sha.getHash("HEX");
}

export async function hashFiles(files, algorithm = "SHA-256") {
  const results = [];
  for (const f of Array.from(files)) {
    const hex = await hashFile(f, algorithm);
    results.push({
      name: f.name,
      size: f.size,
      algorithm,
      hash: hex,
    });
  }
  return results;
}
