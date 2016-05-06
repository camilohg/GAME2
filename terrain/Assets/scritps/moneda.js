// JavaScript
var score = 0;

function OnTriggerEnter( other : Collider ) {
    Debug.Log("OnTriggerEnter() was called");
    if (other.tag == "Appletag") 
    {
        Debug.Log("Other object is a apple");
        score += 5;
        Debug.Log("Score is now " + score);
        Destroy(other.gameObject);
    }
}

function OnGUI() 
{
	GUILayout.Label( "Puntos = " + score );

}