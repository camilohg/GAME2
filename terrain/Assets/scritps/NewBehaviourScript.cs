﻿using UnityEngine;
using System.Collections;

public class NewBehaviourScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
void OnTriggerEnter(Collider obj)
    {
        Destroy(obj.gameObject);
    }


}

