"use server"

export async function createGameplay(gameplay: any) {
  try {
    const response = await fetch(`http://digitsumgraphs.pythonanywhere.com/gameplays/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gameplay)
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return { success: false, message: "Database error: failed to create gameplay" }
  }
}

export async function getGameplaysForUser(userId: number) {
  try {
    const response = await fetch(`http://digitsumgraphs.pythonanywhere.com/gameplays/get/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return { success: false, message: "Database error: failed to create gameplay" }
  }
}